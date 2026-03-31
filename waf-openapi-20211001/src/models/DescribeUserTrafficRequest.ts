// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTrafficRequest extends $dara.Model {
  /**
   * @example
   * 1665386280
   */
  endTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-ae*******i
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1665331200
   */
  startTimestamp?: number;
  /**
   * @example
   * qps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      instanceId: 'string',
      interval: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

