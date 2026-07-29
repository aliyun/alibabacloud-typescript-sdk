// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify a UNIX timestamp. Unit: seconds.
   * 
   * If you do not set this parameter, the current time is used as the end time.
   * 
   * @example
   * 1563445054
   */
  endTime?: number;
  /**
   * @remarks
   * The type of traffic statistics to query. Valid values:
   * 
   * - **max**: the peak traffic within the statistical interval.
   * - **avg**: the average traffic within the statistical interval.
   * 
   * @example
   * max
   */
  flowType?: string;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * > You can call [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) to query the IDs of all Anti-DDoS Origin instances.
   * 
   * 
   * If the instance specified here is used for traffic diversion, you must set the **Interval** request parameter.
   * 
   * @example
   * ddosbgp-cn-n6w203qg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval for traffic statistics. Unit: seconds. This parameter specifies the length of each interval for which traffic data is aggregated. Default value: **5**.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The assets that are assigned public IP addresses to query. If you do not specify this parameter in Settings, the traffic statistics of all assets that are assigned public IP addresses protected by the Anti-DDoS Origin instance are queried.
   * 
   * > The assets that are assigned public IP addresses must have been added as protected objects of the Anti-DDoS Origin instance. You can invoke [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) to query all protected objects of the Anti-DDoS Origin instance.
   * 
   * @example
   * 39.XX.XX.96
   */
  ip?: string;
  /**
   * @remarks
   * The CIDR block used for traffic diversion to query.
   * 
   * @example
   * 111.XX.XX.0/24
   */
  ipnet?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query all region IDs supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not set this parameter, the default resource group is used.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp. Unit: seconds.
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

