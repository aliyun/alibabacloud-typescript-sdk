// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllTenantBindNumberBindingResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The billing method of the number.
   * 
   * @example
   * 1
   */
  billingType?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * b5bfb844-ce85-4779-bc8f-161fba46aa07
   */
  bindingId?: string;
  /**
   * @remarks
   * The list of instance names.
   */
  instanceNameList?: string[];
  /**
   * @remarks
   * The number.
   * 
   * @example
   * 15005059355
   */
  number?: string;
  /**
   * @remarks
   * The policy.
   * 
   * @example
   * {\\"rateLimitPeriod\\":\\"1\\",\\"rateLimitCount\\":\\"1\\"}
   */
  serializedParams?: string;
  /**
   * @remarks
   * The trunk name.
   * 
   * @example
   * Xiaoma-Public
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
   * The list.
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
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListAllTenantBindNumberBindingResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4BEAB4B-C810-5386-B72A-1A35FF1E6B15
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

