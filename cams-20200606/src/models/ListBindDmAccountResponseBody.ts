// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindDmAccountResponseBodyDataExtendAttr extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  accountName?: string;
  /**
   * @example
   * 示例值
   */
  sendType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      sendType: 'SendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      sendType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDmAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  accountCode?: string;
  extendAttr?: ListBindDmAccountResponseBodyDataExtendAttr;
  /**
   * @example
   * 示例值示例值示例值
   */
  instanceId?: string;
  /**
   * @example
   * 示例值
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountCode: 'AccountCode',
      extendAttr: 'ExtendAttr',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCode: 'string',
      extendAttr: ListBindDmAccountResponseBodyDataExtendAttr,
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    if(this.extendAttr && typeof (this.extendAttr as any).validate === 'function') {
      (this.extendAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDmAccountResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: ListBindDmAccountResponseBodyData[];
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * false
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
      code: 'string',
      data: { 'type': 'array', 'itemType': ListBindDmAccountResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

