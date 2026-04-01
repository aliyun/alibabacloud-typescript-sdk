// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance extends $dara.Model {
  creationTime?: string;
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  EPNInstanceType?: string;
  endTime?: string;
  internetMaxBandwidthOut?: number;
  modifyTime?: string;
  networkingModel?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyTime: 'ModifyTime',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
      modifyTime: 'string',
      networkingModel: 'string',
      startTime: 'string',
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

export class DescribeEpnInstancesResponseBodyEPNInstances extends $dara.Model {
  EPNInstance?: DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance[];
  static names(): { [key: string]: string } {
    return {
      EPNInstance: 'EPNInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstance: { 'type': 'array', 'itemType': DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance },
    };
  }

  validate() {
    if(Array.isArray(this.EPNInstance)) {
      $dara.Model.validateArray(this.EPNInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBody extends $dara.Model {
  EPNInstances?: DescribeEpnInstancesResponseBodyEPNInstances;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 40
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1707FC0-430C-423A-B624-284046B20399
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstances: 'EPNInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstances: DescribeEpnInstancesResponseBodyEPNInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.EPNInstances && typeof (this.EPNInstances as any).validate === 'function') {
      (this.EPNInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

