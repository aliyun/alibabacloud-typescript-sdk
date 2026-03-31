// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResponseCodeTrendGraphRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds. The value must be an integral multiple of 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The ID of the region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  /**
   * @remarks
   * The type of the error codes. Valid values:
   * 
   * *   **waf:** error codes that are returned to clients from WAF.
   * *   **upstream:** error codes that are returned to WAF from the origin server.
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
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

