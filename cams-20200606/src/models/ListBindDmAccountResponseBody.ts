// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindDmAccountResponseBodyDataExtendAttr extends $dara.Model {
  /**
   * @example
   * xx@xx.com
   */
  accountName?: string;
  /**
   * @example
   * batch
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
   * xx@xx.com
   */
  accountCode?: string;
  extendAttr?: ListBindDmAccountResponseBodyDataExtendAttr;
  /**
   * @example
   * cams-*
   */
  instanceId?: string;
  /**
   * @example
   * ins
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
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListBindDmAccountResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * xxx-xx**
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

