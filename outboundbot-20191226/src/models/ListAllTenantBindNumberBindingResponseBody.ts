// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllTenantBindNumberBindingResponseBodyDataList extends $dara.Model {
  billingType?: string;
  /**
   * @remarks
   * Binding ID.
   * 
   * @example
   * b5bfb844-ce85-4779-bc8f-161fba46aa07
   */
  bindingId?: string;
  /**
   * @remarks
   * List of instance names.
   */
  instanceNameList?: string[];
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 15005059355
   */
  number?: string;
  /**
   * @remarks
   * Policy.
   * 
   * @example
   * {\\"rateLimitPeriod\\":\\"1\\",\\"rateLimitCount\\":\\"1\\"}
   */
  serializedParams?: string;
  /**
   * @remarks
   * Trunk name.
   * 
   * @example
   * 小码-公共
   */
  trunkName?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      bindingId: 'BindingId',
      instanceNameList: 'InstanceNameList',
      number: 'Number',
      serializedParams: 'SerializedParams',
      trunkName: 'TrunkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      bindingId: 'string',
      instanceNameList: { 'type': 'array', 'itemType': 'string' },
      number: 'string',
      serializedParams: 'string',
      trunkName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceNameList)) {
      $dara.Model.validateArray(this.instanceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Array.
   */
  list?: ListAllTenantBindNumberBindingResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAllTenantBindNumberBindingResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListAllTenantBindNumberBindingResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A4BEAB4B-C810-5386-B72A-1A35FF1E6B15
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAllTenantBindNumberBindingResponseBodyData,
      httpStatusCode: 'number',
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

