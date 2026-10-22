// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPublishTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of business types.
   */
  bizTypeList?: string[];
  /**
   * @remarks
   * The UTC time when the task was created.
   * 
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task failure information.
   * 
   * @example
   * An error occurred while checking whether the module to be published is idle, faq
   */
  error?: string;
  /**
   * @remarks
   * The publish task ID.
   * 
   * @example
   * 8522
   */
  id?: number;
  /**
   * @remarks
   * The UTC time when the task was last modified.
   * 
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @remarks
   * The publish task ID. This is a redundant field. Use the publish task ID instead.
   * 
   * @example
   * 8522
   */
  response?: string;
  /**
   * @remarks
   * The task status.
   * Valid values:
   * 
   * - FE_RUNNING: Publishing in progress.
   * - FE_SUCCESS: Published successfully.
   * - FE_FAILED: Publishing failed.
   * - FE_ABORTED: Publishing canceled.
   * 
   * @example
   * FE_ABORTED
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

