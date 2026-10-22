// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublishTaskStateResponseBody extends $dara.Model {
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
   * The failure information of the task.
   * 
   * @example
   * An error occurred while checking whether the module to be published is idle, faq
   */
  error?: string;
  /**
   * @remarks
   * The fault information of each sub-publish module. The key is the sub-publish module and the value is the fault information.
   * 
   * @example
   * {
   *     "faq": [
   *         "Answer resource not published. Resource type: global service. Name: dynamic answer service"
   *     ]
   * }
   */
  errors?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the publish task.
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
   * The ID of the publish task. This is a redundant field. Use the publish task ID instead.
   * 
   * @example
   * 8522
   */
  response?: string;
  /**
   * @remarks
   * The task status.
   * 
   * Valid values:
   * - FE_RUNNING: Publishing in progress.
   * - FE_SUCCESS: Published.
   * - FE_FAILED: Publish failed.
   * - FE_ABORTED: Publish canceled.
   * 
   * @example
   * FE_RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The warning information of each sub-publish module. The key is the sub-publish module and the value is the warning information.
   * 
   * @example
   * {
   *     "faq": [
   *         "Answer resource not published. Type: service. Name: null. Answer resource not published. Type: service. Name: null"
   *     ]
   * }
   */
  warnings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      errors: 'Errors',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      errors: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
      warnings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    if(this.errors) {
      $dara.Model.validateMap(this.errors);
    }
    if(this.warnings) {
      $dara.Model.validateMap(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

