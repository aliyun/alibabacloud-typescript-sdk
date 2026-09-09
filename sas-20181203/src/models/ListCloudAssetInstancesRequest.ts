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
   * > For specific meanings, refer to the AssetSubType parameter in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * > For specific meanings, refer to the AssetType parameter in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
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
   * - **1**: Non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: Third-party cloud asset
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
   * The list of cloud asset instance types.
   */
  cloudAssetTypes?: ListCloudAssetInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format and contains the following fields:
   * - **name**: The search item.
   * - **value**: The value of the search item.
   * - **logicalExp**: The logical relationship between multiple search item values. Valid values:
   *     - **OR**: The search item values are evaluated using the OR operator.
   *     - **AND**: The search item values are evaluated using the AND operator.
   * > You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"internetIp\\",\\"value\\":\\"192.168\\",\\"logicalExp\\":\\"OR\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
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
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: The search conditions are evaluated using the OR operator.
   * - **AND**: The search conditions are evaluated using the AND operator.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Maximum value: 100. Default value: 20.
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the resource folder member accounts.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
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

