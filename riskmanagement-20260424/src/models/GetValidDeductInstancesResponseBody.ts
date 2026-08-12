// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesResponseBodyDataBodyDataDeductPackageList extends $dara.Model {
  /**
   * @remarks
   * The number of authorizations consumed in the current metering cycle.
   * 
   * @example
   * 10
   */
  currentPeriodUsed?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1737734400000
   */
  endTime?: number;
  /**
   * @remarks
   * The total capacity of the resource plan.
   * 
   * @example
   * 1000
   */
  initCapacity?: number;
  /**
   * @remarks
   * The resource plan instance ID.
   * 
   * @example
   * apigateway-hz-96f6659a1490
   */
  instanceId?: string;
  /**
   * @remarks
   * The module code. Valid values:
   * 
   * - **POST_HOST**: Host and container protection.
   * - **CSPM**: Cloud product configuration check.
   * - **VUL**: Vulnerability scanning.
   * 
   * @example
   * POST_HOST
   */
  module?: string;
  /**
   * @remarks
   * The number of authorizations consumed up to the previous billing cycle.
   * 
   * @example
   * 1
   */
  periodCapacity?: number;
  /**
   * @remarks
   * The start timestamp, in milliseconds.
   * 
   * @example
   * 1737734400000
   */
  startTime?: number;
  /**
   * @remarks
   * The resource plan status. Valid values:
   * 
   * - **valid**: Valid.
   * - **invalid**: Invalid.
   * 
   * @example
   * CREATE_FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPeriodUsed: 'CurrentPeriodUsed',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      module: 'Module',
      periodCapacity: 'PeriodCapacity',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPeriodUsed: 'number',
      endTime: 'number',
      initCapacity: 'number',
      instanceId: 'string',
      module: 'string',
      periodCapacity: 'number',
      startTime: 'number',
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

export class GetValidDeductInstancesResponseBodyDataBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the account is eligible for a trial. Valid values:
   * - **true**: Eligible.
   * - **false**: Not eligible.
   * 
   * @example
   * true
   */
  canTry?: boolean;
  /**
   * @remarks
   * The resource plan usage details.
   */
  deductPackageList?: GetValidDeductInstancesResponseBodyDataBodyDataDeductPackageList[];
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      deductPackageList: 'DeductPackageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'boolean',
      deductPackageList: { 'type': 'array', 'itemType': GetValidDeductInstancesResponseBodyDataBodyDataDeductPackageList },
    };
  }

  validate() {
    if(Array.isArray(this.deductPackageList)) {
      $dara.Model.validateArray(this.deductPackageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidDeductInstancesResponseBodyDataBody extends $dara.Model {
  /**
   * @remarks
   * The data body.
   */
  data?: GetValidDeductInstancesResponseBodyDataBodyData;
  /**
   * @remarks
   * The Security Center request ID.
   * 
   * @example
   * A6FB9AC3-4431-538F-BA8A-2A13AEA208A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetValidDeductInstancesResponseBodyDataBodyData,
      requestId: 'string',
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

export class GetValidDeductInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: GetValidDeductInstancesResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetValidDeductInstancesResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetValidDeductInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data list.
   */
  data?: GetValidDeductInstancesResponseBodyData;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call itself is successful. This does not indicate the success of subsequent business operations.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetValidDeductInstancesResponseBodyData,
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

