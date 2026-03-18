// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If you do not specify this parameter, the current system time is used as the end time.
   * 
   * @example
   * 1563445054
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the traffic statistics to query. Valid values:
   * 
   * *   **max**: the peak traffic within the specified interval.
   * *   **avg**: the average traffic within the specified interval.
   * 
   * Enumerated values:
   * 
   * *   all
   * *   avg
   * *   max
   * 
   * @example
   * max
   */
  flowType?: string;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * If you specify an on-demand instance, you must configure the **Interval** parameter.
   * 
   * @example
   * ddosbgp-cn-n6w203qg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The interval at which the traffic statistics are calculated. Unit: seconds. Default value: **5**.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The public IP address of the asset to query. If you do not specify this parameter, the traffic statistics of all public IP addresses that are protected by the Anti-DDoS Origin instance are queried.
   * 
   * >  The public IP address must be a protected object of the Anti-DDoS Origin instance. You can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query all protected objects of the Anti-DDoS Origin instance.
   * 
   * @example
   * 39.XX.XX.96
   */
  ip?: string;
  /**
   * @remarks
   * The Classless Inter-Domain Routing (CIDR) block of the on-demand instance that you want to query.
   * 
   * @example
   * 111.XX.XX.0/24
   */
  ipnet?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1619798400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ip: 'Ip',
      ipnet: 'Ipnet',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      flowType: 'string',
      instanceId: 'string',
      interval: 'number',
      ip: 'string',
      ipnet: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

