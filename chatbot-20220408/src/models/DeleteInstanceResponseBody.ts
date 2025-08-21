// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceResponseBody extends $dara.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2021-09-11T09:26:14Z
   */
  createTime?: string;
  /**
   * @example
   * 9052
   */
  createUserId?: number;
  /**
   * @example
   * xuqiang_test
   */
  createUserName?: string;
  error?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8521
   */
  response?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      error: 'Error',
      id: 'Id',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      error: 'string',
      id: 'number',
      requestId: 'string',
      response: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

