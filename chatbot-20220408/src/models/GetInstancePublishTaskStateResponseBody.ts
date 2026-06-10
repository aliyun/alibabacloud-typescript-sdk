// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancePublishTaskStateResponseBody extends $dara.Model {
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
   * The error message if the task fails.
   * 
   * @example
   * 检查待发布模块是否空闲发生错误，faq
   */
  error?: string;
  /**
   * @remarks
   * A map of error messages for each submodule, where the key is the submodule and the value is an array of errors.
   * 
   * @example
   * {
   *     "robot_ds": [
   *         "{\\"dialogName\\":\\"TEST\\",\\"errorMessage\\":[\\"medusa@invocation.error.service.offline@请发布对话流所引用服务后重试！\\"],\\"needRefresh\\":false,\\"success\\":false}"
   *     ]
   * }
   */
  errors?: { [key: string]: any };
  /**
   * @remarks
   * The task ID.
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
   * The task ID, returned as a string.
   * 
   * @example
   * 8522
   */
  response?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * FE_RUNNING
   */
  status?: string;
  /**
   * @remarks
   * A map of warning messages for each submodule, where the key is the submodule and the value is an array of warnings.
   * 
   * @example
   * {
   *     "category_bind_faq": [
   *         "以下类目没有发布到正式环境：项目交付类目"
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

