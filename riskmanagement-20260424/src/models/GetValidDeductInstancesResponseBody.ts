// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesResponseBodyDataBodyDataDeductPackageList extends $dara.Model {
  /**
   * @example
   * 10
   */
  currentPeriodUsed?: number;
  /**
   * @example
   * 1737734400000
   */
  endTime?: number;
  /**
   * @example
   * 1000
   */
  initCapacity?: number;
  /**
   * @example
   * apigateway-hz-96f6659a1490
   */
  instanceId?: string;
  /**
   * @example
   * POST_HOST
   */
  module?: string;
  /**
   * @example
   * 1
   */
  periodCapacity?: number;
  /**
   * @example
   * 1737734400000
   */
  startTime?: number;
  /**
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
   * @example
   * true
   */
  canTry?: boolean;
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
  data?: GetValidDeductInstancesResponseBodyDataBodyData;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetValidDeductInstancesResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
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

