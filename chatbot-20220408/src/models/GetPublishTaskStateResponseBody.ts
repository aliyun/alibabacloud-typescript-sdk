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
   * The error message returned if the task fails.
   * 
   * @example
   * 检查待发布模块是否空闲发生错误，faq
   */
  error?: string;
  /**
   * @remarks
   * A map of error messages for each submodule, where the key is the submodule name and the value is the error message.
   * 
   * @example
   * {
   *     "faq": [
   *         "答案资源未发布, 资源类型: 全局服务,名称: 动态答案服务"
   *     ]
   * }
   */
  errors?: { [key: string]: any };
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
   * The publish task ID. This field is redundant. Use the `Id` field instead.
   * 
   * @example
   * 8522
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - `FE_RUNNING`: Publishing
   * 
   * - `FE_SUCCESS`: Success
   * 
   * - `FE_FAILED`: Failed
   * 
   * - `FE_ABORTED`: Aborted
   * 
   * @example
   * FE_RUNNING
   */
  status?: string;
  /**
   * @remarks
   * A map of warning messages for each submodule, where the key is the submodule name and the value is the warning message.
   * 
   * @example
   * {
   *     "faq": [
   *         "答案资源未发布,类型:service名称:null,答案资源未发布,类型:service名称:null"
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

