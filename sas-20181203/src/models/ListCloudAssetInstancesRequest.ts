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
   * The query operator. Only INCLUDE is supported.
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
   * The subtype of the cloud product.
   * 
   * > For more information, see the AssetSubType field in [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~).
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * > For more information, see the AssetType field in [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~).
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
   * - **1**: off-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: other cloud assets
   * - **8**: lightweight asset
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
   * The data list to query by keyword.
   */
  cloudAssetQueryData?: ListCloudAssetInstancesRequestCloudAssetQueryData[];
  /**
   * @remarks
   * The asset list of cloud asset instances.
   */
  cloudAssetTypes?: ListCloudAssetInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * The search criteria for assets. This parameter is in JSON format and contains the following fields:
   * - **name**: The search field.
   * - **value**: The value of the search field.
   * - **logicalExp**: The logical relationship between multiple search field values. Valid values:
   *     - **OR**: Multiple search field values are evaluated using an OR relationship.
   *     - **AND**: Multiple search field values are evaluated using an AND relationship.
   * > You can call [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) to query the supported search criteria.
   * 
   * @example
   * [{\\"name\\":\\"internetIp\\",\\"value\\":\\"192.168\\",\\"logicalExp\\":\\"OR\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number to return in a paged query.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to return sale-related data. Valid values:
   * - **true**: Returns sale-related data.
   * - **false**: Does not return sale-related data.
   */
  isSaleData?: boolean;
  /**
   * @remarks
   * The logical relationship between multiple search criteria. Valid values:
   * 
   * - **OR**: Multiple search criteria are evaluated using an OR relationship.
   * - **AND**: Multiple search criteria are evaluated using an AND relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of rows per page. Maximum value: 100. Default value: 20.
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
  /**
   * @remarks
   * The ID of the main account of the resource folder member accounts.
   * > Call [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

