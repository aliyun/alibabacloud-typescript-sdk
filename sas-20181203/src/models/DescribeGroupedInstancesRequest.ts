// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the first page to return. Default value: **1**, which indicates that the query results are returned starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the asset group to query. Fuzzy match is supported.
   * 
   * @example
   * test-01
   */
  fieldValue?: string;
  /**
   * @remarks
   * The filter condition for querying assets. Valid values:
   * 
   * - **groupId**: queries assets by asset group.
   * - **regionId**: queries assets by region.
   * - **vpcInstanceId**: queries assets by virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * groupId
   */
  groupField?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of assets to query. Set the value to **ecs**, which indicates Elastic Compute Service (ECS) instances.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * Settings for whether to enable paged query. Default value: **true**. Valid values:
   * - **true**: Paged query is enabled.
   * - **false**: Paged query is disabled. Paging is not performed.
   * 
   * @example
   * true
   */
  noPage?: boolean;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **20**, which indicates that 20 entries of asset information are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is added as a member of a resource folder for member accounts.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The edition-based filter condition for querying assets. Valid values:
   * 
   * - **sas_gte_advanced**: Advanced Edition or higher
   * - **sas_gte_enterprise**: Enterprise Edition or higher
   * - **sas_gt_basic**: paid edition
   * - **sas_eq_advanced**: Advanced Edition
   * - **sas_gt_anti_virus**: higher than Anti-virus Edition
   * 
   * @example
   * sas_gt_basic
   */
  saleVersionCheckCode?: string;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The server vendors. Separate multiple vendors with commas (,). Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

