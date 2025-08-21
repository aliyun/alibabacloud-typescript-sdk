// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishTaskResponseBody extends $dara.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
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

