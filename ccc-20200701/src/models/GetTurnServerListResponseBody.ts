// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTurnServerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   */
  code?: string;
  /**
   * @remarks
   * A list of front-end access point servers.
   * 
   * @example
   * [
   * 	{
   * 		"region":"hangzhou",
   * 		"name":"杭州",
   * 		"domain":"turn-hz-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"qingdao",
   * 		"name":"青岛",
   * 		"domain":"turn-qd-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"shanghai",
   * 		"name":"上海",
   * 		"domain":"turn-sh-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"chengdu",
   * 		"name":"成都",
   * 		"domain":"turn-cd-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"beijing",
   * 		"name":"北京",
   * 		"domain":"turn-bj-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"huanan",
   * 		"name":"深圳",
   * 		"domain":"turn-sz-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	},
   * 	{
   * 		"region":"zhangbei",
   * 		"name":"张北",
   * 		"domain":"turn-zb-ecs.ccc.aliyuncs.com",
   * 		"cidr":"172.31.XX.XX/28"
   * 	}
   * ]
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

