// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Operation logs that were generated before this time are queried.**** The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1640880000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all instances.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **3**: Add an IP address to the instance.
   * *   **4**: Remove an IP address from the instance.
   * *   **5**: Downgrade the instance.
   * *   **6**: Deactivate blackhole filtering.
   * *   **7**: Reset the number of times that you can deactivate blackhole filtering.
   * *   **8**: Restore the mitigation capability.
   * *   **9**: Add an asset group.
   * *   **10**: Remove an asset group.
   * *   **11**: Enable the metering method of daily 95th percentile for the burstable clean bandwidth feature.
   * *   **12**: Enable the metering method of monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **13**: Periodically switch between the metering methods of daily 95th percentile and monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **14**: Disable the metering method of daily 95th percentile for the burstable clean bandwidth feature.
   * *   **15**: Disable the metering method of monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **16**: Disable burstable clean bandwidth due to overdue payments.
   * *   **17**: Disable burstable clean bandwidth due to instance expiration.
   * 
   * @example
   * 3
   */
  opAction?: number;
  /**
   * @remarks
   * The sorting method of operation logs. Set the value to **opdate**, which indicates sorting based on the operation time.
   * 
   * @example
   * opdate
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of operation logs. Valid values:
   * 
   * *   **ASC**: the ascending order.
   * *   **DESC**: the descending order.
   * 
   * Default value: **DESC**.
   * 
   * @example
   * ASC
   */
  orderDir?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time. Operation logs that were generated after this time are queried.**** The value is a UNIX timestamp. Unit: milliseconds.
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

