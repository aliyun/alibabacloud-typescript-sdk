// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the data label. Valid values:
   * 
   * - **101**: Personal sensitive information
   * 
   * - **102**: Personal information
   * 
   * - **107**: General information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the data label. Valid values:
   * 
   * - Personal sensitive information
   * 
   * - Personal information
   * 
   * - General information
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
   * The unique ID of the data asset instance that is recorded in Data Security Center.
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
   * - **true**: secure
   * 
   * - **false**: insecure
   * 
   * @example
   * true
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The time when the last scan of the data asset instance was completed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637622793000
   */
  lastFinishTime?: number;
  /**
   * @remarks
   * If multi-account management is enabled and the asset belongs to a member account, this parameter indicates the UID of the member account.
   * 
   * @example
   * 12567890126
   */
  memberAliUid?: string;
  /**
   * @remarks
   * The list of data labels.
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
   * The name of the product to which the data asset instance belongs, such as MaxCompute, OSS, or RDS. For more information about the supported products, see [Data assets that can be scanned for sensitive data](https://help.aliyun.com/document_detail/212906.html).
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
   * - **true**: The instance is protected.
   * 
   * - **false**: The instance is not protected.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The ID of the threat level for the data asset instance. The higher the threat level ID, the more sensitive the data.
   * 
   * - **1**: No sensitive data is detected. No threat.
   * 
   * - **2**: Threat level 1.
   * 
   * - **3**: Threat level 2.
   * 
   * - **4**: Threat level 3.
   * 
   * - **5**: Threat level 4.
   * 
   * - **6**: Threat level 5.
   * 
   * - **7**: Threat level 6.
   * 
   * - **8**: Threat level 7.
   * 
   * - **9**: Threat level 8.
   * 
   * - **10**: Threat level 9.
   * 
   * - **11**: Threat level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the threat level for the data asset instance.
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
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total amount of sensitive data in the data asset instance. For example, if the data asset is an RDS instance, this parameter indicates the total number of sensitive tables in the instance.
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
   * The total amount of data in the data asset instance. For example, if the data asset is an RDS instance, this parameter indicates the total number of tables in the instance.
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the data asset instances.
   */
  items?: DescribeInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of data asset instances returned on each page.
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
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data asset instances.
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

