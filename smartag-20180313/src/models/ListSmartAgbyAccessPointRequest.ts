// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartAGByAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * 238
   */
  accessPointId?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Maximum value: **50** .
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * A region contains one or more access points. You can call the [ListAccessPoints](https://help.aliyun.com/document_detail/183876.html) operation to query access points in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the SAG instance. Valid values:
   * 
   * *   **Active**: The SAG device is connected to Alibaba Cloud.
   * *   **offline**: The SAG device is disconnected from Alibaba Cloud.
   * 
   * @example
   * Active
   */
  smartAGStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGStatus: 'SmartAGStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

