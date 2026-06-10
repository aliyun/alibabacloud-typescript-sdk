// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantBindNumberResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * e2d7a184-7d6c-45d4-ac24-34ab48f54669
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * xxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the number is bound to the instance
   * 
   * @example
   * true
   */
  isBinding?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isBinding: 'IsBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      isBinding: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Job group description
   */
  list?: DescribeTenantBindNumberResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTenantBindNumberResponseBodyDataList },
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

export class DescribeTenantBindNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: DescribeTenantBindNumberResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1364f208-982d-4d0c-89aa-d56e22b47589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
   * @example
   * true
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
      data: DescribeTenantBindNumberResponseBodyData,
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

