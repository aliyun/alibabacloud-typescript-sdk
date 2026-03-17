// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosCarsResponseBodyQosCarsQosCar extends $dara.Model {
  description?: string;
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  name?: string;
  percentSourceType?: string;
  priority?: number;
  qosCarId?: string;
  qosId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      name: 'Name',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      name: 'string',
      percentSourceType: 'string',
      priority: 'number',
      qosCarId: 'string',
      qosId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBodyQosCars extends $dara.Model {
  qosCar?: DescribeQosCarsResponseBodyQosCarsQosCar[];
  static names(): { [key: string]: string } {
    return {
      qosCar: 'QosCar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosCar: { 'type': 'array', 'itemType': DescribeQosCarsResponseBodyQosCarsQosCar },
    };
  }

  validate() {
    if(Array.isArray(this.qosCar)) {
      $dara.Model.validateArray(this.qosCar);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  qosCars?: DescribeQosCarsResponseBodyQosCars;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7B758A9-009E-4C9D-9618-714EAE8BA5E9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosCars: 'QosCars',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qosCars: DescribeQosCarsResponseBodyQosCars,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.qosCars && typeof (this.qosCars as any).validate === 'function') {
      (this.qosCars as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

