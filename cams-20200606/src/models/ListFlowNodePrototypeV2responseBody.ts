// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowNodePrototypeV2ResponseBodyDataModel extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  groupCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  publicExtend?: string;
  /**
   * @example
   * 示例值示例值
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupCode: 'GroupCode',
      publicExtend: 'PublicExtend',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupCode: 'string',
      publicExtend: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodePrototypeV2ResponseBodyData extends $dara.Model {
  model?: ListFlowNodePrototypeV2ResponseBodyDataModel[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': ListFlowNodePrototypeV2ResponseBodyDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodePrototypeV2ResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 91
   */
  code?: number;
  data?: ListFlowNodePrototypeV2ResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: ListFlowNodePrototypeV2ResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

