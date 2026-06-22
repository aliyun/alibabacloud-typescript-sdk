// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetInstancesRequestCloudAssetQueryData extends $dara.Model {
  /**
   * @remarks
   * The query content.
   * 
   * @example
   * 163.8.8.9
   */
  data?: string;
  /**
   * @remarks
   * The query operator. Currently, only INCLUDE is supported.
   * 
   * @example
   * INCLUDE
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAssetInstancesRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service.
   * 
   * > For details, refer to AssetSubType in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * > For details, refer to AssetType in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * 18
   */
  assetType?: number;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: Off-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: Other cloud assets
   * - **8**: Lightweight asset
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
   * The data list queried by keyword.
   */
  cloudAssetQueryData?: ListCloudAssetInstancesRequestCloudAssetQueryData[];
  /**
   * @remarks
   * The list of assets of the cloud asset instance.
   */
  cloudAssetTypes?: ListCloudAssetInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * The conditions used to search for assets. This parameter is in JSON format and contains the following fields:
   * - **name**: the search item.
   * - **value**: the value of the search item.
   * - **logicalExp**: the logical relationship between multiple search item values. Valid values:
   *     - **OR**: indicates that multiple search item values have an **OR** relationship.
   *     - **AND**: indicates that multiple search item values have an **AND** relationship.
   * > You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"internetIp\\",\\"value\\":\\"192.168\\",\\"logicalExp\\":\\"OR\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The number of the current page to return in paginated queries.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  isSaleData?: boolean;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: indicates that multiple search conditions have an **OR** relationship.
   * - **AND**: indicates that multiple search conditions have an **AND** relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of rows that can be displayed per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssetQueryData: 'CloudAssetQueryData',
      cloudAssetTypes: 'CloudAssetTypes',
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      isSaleData: 'IsSaleData',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetQueryData: { 'type': 'array', 'itemType': ListCloudAssetInstancesRequestCloudAssetQueryData },
      cloudAssetTypes: { 'type': 'array', 'itemType': ListCloudAssetInstancesRequestCloudAssetTypes },
      criteria: 'string',
      currentPage: 'number',
      isSaleData: 'boolean',
      logicalExp: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetQueryData)) {
      $dara.Model.validateArray(this.cloudAssetQueryData);
    }
    if(Array.isArray(this.cloudAssetTypes)) {
      $dara.Model.validateArray(this.cloudAssetTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

