import {Controller} from 'egg';
import Action from '../../node_modules/egg-cakejs/lib/blueprint';

export default class TSHomeController extends Controller {
	@Action({method: 'get', path: '/index'})
	public async index() {
		const data = await this.ctx.service.test.get(123);
		this.ctx.body = `${this.ctx.currentUser.name}: hi, ${data.name}`;
	}
}
