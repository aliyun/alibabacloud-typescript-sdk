// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the DDoS attack events to query. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638288000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The attacked IP address to query.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The Settings for the page number of the current page during paging in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The Settings for the number of DDoS attack events to return on each page during paging in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all region IDs supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the default resource group is used.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the DDoS attack events to query. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1633017600
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      ip: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

