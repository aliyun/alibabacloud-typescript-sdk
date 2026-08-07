// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The data tag ID. Valid values:
   * - **101**: personal sensitive information
   * - **102**: personal information
   * - **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The data tag name. Valid values:
   * - 个人敏感信息
   * - 个人信息
   * - 通用信息
   * 
   * @example
   * personal sensitive data
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the data asset instance was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637226782000
   */
  creationTime?: number;
  /**
   * @remarks
   * The name of the department to which the data asset instance belongs.
   * 
   * @example
   * ***DemoCenter
   */
  departName?: string;
  /**
   * @remarks
   * The unique ID of the data asset instance recorded in Data Security Center.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The description of the data asset instance.
   * 
   * @example
   * instance dscription
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The security status of the data asset instance. Valid values:
   * 
   * - **true**: Secure.
   * - **false**: Not secure.
   * 
   * @example
   * true
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The time when the most recent scan of the data asset instance was completed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637622793000
   */
  lastFinishTime?: number;
  /**
   * @remarks
   * If the management account has enabled multi-account management and the asset belongs to another member account, this field displays the UID of the member account.
   * 
   * @example
   * 12567890126
   */
  memberAliUid?: string;
  /**
   * @remarks
   * The list of data tags.
   */
  modelTags?: DescribeInstancesResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data asset instance.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the data asset instance.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the product to which the data asset instance belongs, such as MaxCompute, OSS, or RDS. For supported product names, see [Data types from which sensitive data can be detected](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the product to which the data asset instance belongs.
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The protection status of the data asset instance. Valid values:
   * 
   * - **true**: Protected.
   * - **false**: Not protected.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The risk level ID of the data asset instance. A higher risk level ID indicates more sensitive data is detected.
   * 
   * - **1**: No sensitive data is detected. No risk.
   * - **2**: Sensitive data risk at level 1.
   * - **3**: Sensitive data risk at level 2.
   * - **4**: Sensitive data risk at level 3.
   * - **5**: Sensitive data risk at level 4.
   * - **6**: Sensitive data risk at level 5.
   * - **7**: Sensitive data risk at level 6.
   * - **8**: Sensitive data risk at level 7.
   * - **9**: Sensitive data risk at level 8.
   * - **10**: Sensitive data risk at level 9.
   * - **11**: Sensitive data risk at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the data asset instance.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset instance hits.
   * 
   * @example
   * *** rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset instance contains sensitive data. Valid values:
   * 
   * - **true**: Contains sensitive data.
   * - **false**: Does not contain sensitive data.
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive data items in the data asset instance. For example, if the data asset is ApsaraDB RDS, this value indicates the total number of sensitive tables in the databases of the instance.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * tenant
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of data items in the data asset instance. For example, if the data asset is ApsaraDB RDS, this value indicates the total number of tables in the databases of the instance.
   * 
   * @example
   * 231
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      departName: 'DepartName',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      labelsec: 'Labelsec',
      lastFinishTime: 'LastFinishTime',
      memberAliUid: 'MemberAliUid',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      protection: 'Protection',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      departName: 'string',
      id: 'number',
      instanceDescription: 'string',
      labelsec: 'boolean',
      lastFinishTime: 'number',
      memberAliUid: 'string',
      modelTags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      protection: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      tenantName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the data asset instances returned.
   */
  items?: DescribeInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of data asset instances on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data asset instances returned.
   * 
   * @example
   * 231
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
      items: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyItems },
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

