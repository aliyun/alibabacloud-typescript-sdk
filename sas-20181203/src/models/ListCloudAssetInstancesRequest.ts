// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetInstancesRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud asset.
   * 
   * You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the subtype of the cloud asset.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the cloud asset type.
   * 
   * @example
   * 18
   */
  assetType?: number;
  /**
   * @remarks
   * The server type. Valid values:
   * 
   * *   **0**: a cloud asset provided by Alibaba Cloud
   * *   **1**: a cloud asset outside Alibaba Cloud
   * *   **2**: a cloud asset in a data center
   * *   **3**, **4**, **5**, and **7**: a cloud asset provided by a third-party service provider
   * *   **8**: a lightweight cloud asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAssetInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the cloud asset.
   */
  cloudAssetTypes?: ListCloudAssetInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * The search conditions for assets. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **name**: the name of the search condition.
   * 
   * *   **value**: the value of the search condition.
   * 
   * *   **logicalExp**: the logical relation for multiple search conditions. Valid values:
   * 
   *     *   **OR**: The search conditions use a logical **OR**.
   *     *   **AND**: The search conditions use a logical **AND**.
   * 
   * > You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"internetIp\\",\\"value\\":\\"192.168\\",\\"logicalExp\\":\\"OR\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relation for multiple search conditions. Valid values:
   * 
   * *   **OR**: The search conditions use a logical **OR**.
   * *   **AND**: The search conditions use a logical **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssetTypes: 'CloudAssetTypes',
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetTypes: { 'type': 'array', 'itemType': ListCloudAssetInstancesRequestCloudAssetTypes },
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetTypes)) {
      $dara.Model.validateArray(this.cloudAssetTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

