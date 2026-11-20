// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is a UNIX timestamp in UTC. Unit: seconds. Data is filtered based on the time when the event was last detected. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792973400
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-dss****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-demo****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp in UTC. Unit: seconds. Data is filtered based on the time when the event was last detected. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792973400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

