import {Controller} from 'egg';
import { Action } from '../../node_modules/egg-cakejs/lib/action';
import { Inject } from '../../node_modules/egg-cakejs/lib/register';
import TestService from '../service/test';

export default class TSHomeController extends Controller {
	@Inject('test')
  private testService: TestService;

	@Action({method: 'get', path: '/'})
	public async index() {
		const data = await this.testService.get(123);
		this.ctx.body = `hi, ${data.name}`;
	}
}
