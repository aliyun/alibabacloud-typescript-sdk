// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the group to which the assets belong. Fuzzy search is supported.
   * 
   * @example
   * test-01
   */
  fieldValue?: string;
  /**
   * @remarks
   * The filter condition that you want to use to query the assets. Valid values:
   * 
   * *   **groupId**: the group to which the assets belong
   * *   **regionId**: the region in which the assets reside
   * *   **vpcInstanceId**: the virtual private cloud (VPC) in which the assets reside
   * 
   * This parameter is required.
   * 
   * @example
   * groupId
   */
  groupField?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the assets that you want to query. Set the value to **ecs**, which indicates Elastic Compute Service (ECS) instances.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query. Default value: **true**. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  noPage?: boolean;
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
   * The edition of Security Center that protects the asset. Valid values:
   * 
   * * **sas_gte_advanced**: the Advanced edition or higher
   * * **sas_gte_enterprise**: the Enterprise edition or higher
   * * **sas_gt_basic:** a paid edition
   * * **sas_eq_advanced:** the Advanced edition
   * * **sas_gt_anti_virus:** an edition higher than the Anti-virus edition
   * 
   * @example
   * sas_gt_basic
   */
  saleVersionCheckCode?: string;
  /**
   * @remarks
   * The source of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: a third-party cloud server
   * *   **2**: a server in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The source of the server. Separate multiple sources with commas (,).Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: a third-party cloud server
   * *   **2**: a server in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
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

