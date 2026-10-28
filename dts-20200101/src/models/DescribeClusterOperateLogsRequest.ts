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
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client. Make sure that the value is unique across different requests. The **ClientToken** parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated DTS cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsxxxxx
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * @example
   * 1650866995000
   */
  endTime?: number;
  ownerID?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start timestamp. If you do not specify this parameter, the logs generated within the last seven days are returned by default. Unit: milliseconds.
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

