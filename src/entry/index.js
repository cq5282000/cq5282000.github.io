/**
 * Created by chenqu on 2017/9/4.
 */
import IndexContainer from '../containers/IndexContainer/IndexContainer';
import render from '../libs/createRender';

render(IndexContainer);
if (module.hot) {
    module.hot.accept('../containers/IndexContainer/IndexContainer', () => {
        const NewEntry = require('../containers/IndexContainer/IndexContainer').default;
        render(NewEntry);
    });
}
