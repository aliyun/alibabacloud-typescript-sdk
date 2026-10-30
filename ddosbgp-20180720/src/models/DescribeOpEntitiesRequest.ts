// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The paging Settings for the current page number in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp in milliseconds. Operation logs generated before this time are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1640880000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * - **3**: attach an IP address
   * - **4**: unbind an IP address
   * - **5**: decrease the quota
   * - **6**: deactivate blackhole filtering
   * - **7**: Reset quota on blackhole filtering deactivation
   * - **8**: recover burstable protection
   * - **9**: add an Asset group
   * - **10**: delete an Asset group
   * - **11**: enable daily 95th percentile bandwidth
   * - **12**: enable monthly 95th percentile bandwidth
   * - **13**: periodically switch between daily and monthly 95th percentile bandwidth patterns
   * - **14**: shutdown daily 95th percentile bandwidth
   * - **15**: shutdown monthly 95th percentile bandwidth
   * - **16**: shutdown burstable clean bandwidth due to overdue payments
   * - **17**: shutdown burstable clean bandwidth when they expire
   * 
   * @example
   * 3
   */
  opAction?: number;
  /**
   * @remarks
   * The field by which to sort the operation logs. Set the value to **opdate**, which indicates that the operation logs are sorted by operation time.
   * 
   * @example
   * opdate
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of the operation logs. Valid values:
   * 
   * - **ASC**: ascending order
   * - **DESC**: descending order
   * 
   * Default value: **DESC**.
   * 
   * @example
   * ASC
   */
  orderDir?: string;
  /**
   * @remarks
   * The paging Settings for the number of Operation logs per page in a paged query. Maximum value: 50.
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the IDs of all regions supported by Anti-DDoS Origin.
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
   * The beginning of the time range to query. The value is a UNIX timestamp in milliseconds. Operation logs generated after this time are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609430400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      opAction: 'OpAction',
      orderBy: 'OrderBy',
      orderDir: 'OrderDir',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      opAction: 'number',
      orderBy: 'string',
      orderDir: 'string',
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

