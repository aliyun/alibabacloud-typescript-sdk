// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkMetricsRequestDimensions extends $dara.Model {
  /**
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @example
   * eip-sample*
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsRequest extends $dara.Model {
  accountIds?: string[];
  /**
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  dimensions?: GetNisNetworkMetricsRequestDimensions[];
  /**
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIPV4
   */
  resourceType?: string;
  /**
   * @example
   * TimestampAscending
   */
  scanBy?: string;
  stepMinutes?: number;
  /**
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      scanBy: 'ScanBy',
      stepMinutes: 'StepMinutes',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      dimensions: { 'type': 'array', 'itemType': GetNisNetworkMetricsRequestDimensions },
      endTime: 'number',
      metricName: 'string',
      regionNo: 'string',
      resourceType: 'string',
      scanBy: 'string',
      stepMinutes: 'number',
      useCrossAccount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

