// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinueInstancePublishTaskResponseBody extends $dara.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * {}
   */
  errors?: { [key: string]: any };
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
  /**
   * @example
   * {         "category_bind_faq": [             "以下类目没有发布到正式环境: 项目交付信息汇总"         ]     }
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

