// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number from which query results start to be displayed. Default value: **1**, indicating that query results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the asset group to query. Fuzzy search is supported.
   * 
   * @example
   * test-01
   */
  fieldValue?: string;
  /**
   * @remarks
   * The filter condition for querying assets. Valid values:
   * 
   * - **groupId**: queries assets by group.
   * - **regionId**: queries assets by region.
   * - **vpcInstanceId**: queries assets by Virtual Private Cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * groupId
   */
  groupField?: string;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of assets to query. Fixed value: **ecs**, indicating Elastic Compute Service (ECS) instances.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * Specifies whether to enable paginated queries. Default value: **true**. Valid values:
   * - **true**: enables paginated queries.
   * - **false**: disables paginated queries.
   * 
   * @example
   * true
   */
  noPage?: boolean;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **20**, indicating that 20 entries of asset information are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The edition filter for querying assets. Valid values:
   * 
   * - **sas_gte_advanced**: Advanced edition or higher
   * - **sas_gte_enterprise**: Enterprise edition or higher
   * - **sas_gt_basic**: paid editions
   * - **sas_eq_advanced**: Advanced edition only
   * - **sas_gt_anti_virus**: editions higher than Anti-virus edition
   * 
   * @example
   * sas_gt_basic
   */
  saleVersionCheckCode?: string;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud assets
   * - **1**: non-cloud assets
   * - **2**: IDC assets
   * - **3**, **4**, **5**, **7**: assets from other cloud providers
   * - **8**: lightweight assets
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The server vendors. Separate multiple vendors with commas (,). Valid values:
   * 
   * - **0**: Alibaba Cloud assets
   * - **1**: non-cloud assets
   * - **2**: IDC assets
   * - **3**, **4**, **5**, **7**: assets from other cloud providers
   * - **8**: lightweight assets
   * 
   * @example
   * 0,8
   */
  vendors?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fieldValue: 'FieldValue',
      groupField: 'GroupField',
      lang: 'Lang',
      machineTypes: 'MachineTypes',
      noPage: 'NoPage',
      pageSize: 'PageSize',
      saleVersionCheckCode: 'SaleVersionCheckCode',
      vendor: 'Vendor',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fieldValue: 'string',
      groupField: 'string',
      lang: 'string',
      machineTypes: 'string',
      noPage: 'boolean',
      pageSize: 'number',
      saleVersionCheckCode: 'string',
      vendor: 'number',
      vendors: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

