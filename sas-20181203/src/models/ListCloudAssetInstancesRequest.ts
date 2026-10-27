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
   * The subtype of the cloud product.
   * 
   * > For more information, refer to the AssetSubType parameter in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud asset.
   * 
   * > For more information, refer to the AssetType parameter in the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * 18
   */
  assetType?: number;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-Alibaba Cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, and **7**: other cloud asset
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
   * The data list queried based on keywords.
   */
  cloudAssetQueryData?: ListCloudAssetInstancesRequestCloudAssetQueryData[];
  /**
   * @remarks
   * The list of cloud assets.
   */
  cloudAssetTypes?: ListCloudAssetInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * Specifies the conditions for searching assets. This parameter is in JSON format and contains the following fields:
   * - **name**: the search field.
   * - **value**: the value of the search field.
   * - **logicalExp**: the logical relationship among multiple search field values. Valid values:
   *     - **OR**: specifies an **OR** logical relationship among multiple search field values.
   *     - **AND**: specifies an **AND** logical relationship among multiple search field values.
   * > You can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"internetIp\\",\\"value\\":\\"192.168\\",\\"logicalExp\\":\\"OR\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to return sales-related data. Valid values:
   * - **true**: returns sales-related data.
   * - **false**: does not return sales-related data.
   */
  isSaleData?: boolean;
  /**
   * @remarks
   * Specifies the logical relationship among multiple search conditions. Valid values:
   * 
   * - **OR**: specifies an **OR** logical relationship among multiple search conditions.
   * - **AND**: specifies an **AND** logical relationship among multiple search conditions.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 100. Default value: 20.
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
   * The ID of the Alibaba Cloud account for the member account in the resource directory.
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1234567890123456
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

