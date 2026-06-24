// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablesResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Rule Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the risk level for the sensitive data detection rule. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the data asset table was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The unique ID of the data asset table.
   * 
   * @example
   * 222
   */
  id?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance to which the data asset table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the data asset table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the data asset table.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the product to which the data asset table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**. For more information about the supported products, see [Data asset types that support sensitive data detection](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the product to which the data asset table belongs.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the risk level for the data asset table. Each risk level ID corresponds to a risk level name. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level for the data asset table. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The information about the sensitive data detection rules that the data asset table hits.
   */
  ruleList?: DescribeTablesResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Indicates whether the data asset table contains sensitive fields.
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive fields in the data asset table.
   * 
   * @example
   * 32
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive fields in the data asset table.
   * 
   * @example
   * 21%
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * Tenate001
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the data asset table.
   * 
   * @example
   * 1234
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      name: 'Name',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      sensitiveRatio: 'SensitiveRatio',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'number',
      instanceName: 'string',
      name: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItemsRuleList },
      sensitive: 'boolean',
      sensitiveCount: 'number',
      sensitiveRatio: 'string',
      tenantName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data asset tables.
   */
  items?: DescribeTablesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

