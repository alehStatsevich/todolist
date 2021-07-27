import React, {useEffect} from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container, createStyles, Grid,
    IconButton,
    LinearProgress, makeStyles, Theme,
    Toolbar,
    Typography
} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import {Login} from "../features/Login/Login";
import {Redirect, Route, Switch} from 'react-router-dom'
import {logoutTC} from "../features/Login/authReducer";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {

    // ==============material-ui  /==/ menu ========>
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
        }),
    );
    const classes = useStyles();
    //=======================================================>
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const  isInitialized = useSelector<AppRootStateType,boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType,boolean>((state)=>state.auth.isLoggedIn)
const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])
    const logoutHandler=()=>{
       dispatch( logoutTC())
    }
    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }


    return (
        <div className="App">
            <ErrorSnackbar/>
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Grid style={{padding: "20px"}}>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Logout</Button>}
                    </Grid>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Switch>
                <Route exact path={'/'} render={() => <TodolistsList demo={demo}/>}/>
                <Route exact path={'/login'} render={() => <Login/>}/>
                    <Route path={'/404'} render={() => <h1>404.PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </Container>
            </div>
        </div>
    )
}

export default App
