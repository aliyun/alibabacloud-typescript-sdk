// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterOperateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure that the value is unique across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsxxxxx
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds (ms).
   * 
   * @example
   * 1650866995000
   */
  endTime?: number;
  ownerID?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start timestamp. If this parameter is not specified, data from the last seven days is returned by default. Unit: milliseconds (ms).
   * 
   * @example
   * 1650866955000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      ownerID: 'OwnerID',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      dedicatedClusterId: 'string',
      dtsJobId: 'string',
      endTime: 'number',
      ownerID: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

