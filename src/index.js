import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './scss/app.scss';

import {
  HashRouter,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Toast from './components/Toast';
import Home from './components/Home';
import CollectList from './components/CollectList';
import UserTopics from './components/UserTopics';
import UserComments from './components/UserComments';
import TopicDetail from './components/TopicDetail';
import Top100 from './components/Top100';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import CreateTopic from './components/CreateTopic';
import EditTopic from './components/EditTopic';
import UserSettings from './components/UserSettings';
import Error from './components/Error';
import DefaultLayout from './components/DefaultLayout';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Toast />
        <Switch>
          <DefaultLayout exact path='/' component={Home} />
          <DefaultLayout path='/topic/create' component={CreateTopic} />
          <DefaultLayout path='/topic/edit/:id' component={EditTopic} />
          <DefaultLayout path='/topic/:id' component={TopicDetail} />
          <DefaultLayout path='/error' component={Error} />
          <DefaultLayout path='/top100' component={Top100} />
          <DefaultLayout path='/login' component={Login} />
          <DefaultLayout path='/register' component={Register} />
          <DefaultLayout path='/user/settings' component={UserSettings} />
          <DefaultLayout path='/user/:username/collects' component={CollectList} />
          <DefaultLayout path='/user/:username/topics' component={UserTopics} />
          <DefaultLayout path='/user/:username/comments' component={UserComments} />
          <DefaultLayout path='/user/:username' component={UserProfile} />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </div>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
