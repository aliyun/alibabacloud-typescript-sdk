// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinueInstancePublishTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business types associated with the publish task.
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
   * A key-value map of errors. Keys are the submodule names, and values are arrays of error messages.
   * 
   * @example
   * {}
   */
  errors?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the task.
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
   * The ID of the request.
   * 
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task, returned as a string.
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
   * A key-value map of warnings. Keys are the submodule names, and values are arrays of warning messages.
   * 
   * @example
   * {
   * 	"category_bind_faq": [
   * 		"以下类目没有发布到正式环境: 项目交付信息汇总"
   * 	]
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

