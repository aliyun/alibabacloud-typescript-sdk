// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **101**: personal sensitive information
   * *   **102**: personal information
   * *   **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the tag. Valid values:
   * 
   * *   Personal sensitive information
   * *   Personal information
   * *   General information
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
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637226782000
   */
  creationTime?: number;
  /**
   * @remarks
   * The name of the department to which the data asset belongs.
   * 
   * @example
   * ***DemoCenter
   */
  departName?: string;
  /**
   * @remarks
   * The unique ID of the data asset in DSC.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The description of the data asset.
   * 
   * @example
   * Data asset Information 1
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The security status of the data asset. Valid values:
   * 
   * *   **true**: The data asset is secure.
   * *   **false**: The data asset is insecure.
   * 
   * @example
   * true
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The time when the data asset was last scanned. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637622793000
   */
  lastFinishTime?: number;
  /**
   * @remarks
   * If the management account has opened multiple accounts and the asset belongs to other member accounts, this field displays the UID of the member accounts.
   * 
   * @example
   * 12567890126
   */
  memberAliUid?: string;
  /**
   * @remarks
   * A list of tags.
   */
  modelTags?: DescribeInstancesResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data asset.
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
   * The Alibaba Cloud account to which the data asset belongs.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs, such as MaxCompute, OSS, and ApsaraDB RDS. For more information about the types of data assets that DSC can scan to detect sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs.
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The protection status of the data asset. Valid values:
   * 
   * *   **true**: The data asset is being protected.
   * *   **false**: The data asset is not protected.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The ID of the sensitivity level for the data asset. A higher sensitivity level ID indicates that the identified data is more sensitive.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: sensitive data at level 1.
   * *   **3**: sensitive data at level 2.
   * *   **4**: sensitive data at level 3.
   * *   **5**: sensitive data at level 4.
   * *   **6**: sensitive data at level 5.
   * *   **7**: sensitive data at level 6.
   * *   **8**: sensitive data at level 7.
   * *   **9**: sensitive data at level 8.
   * *   **10**: sensitive data at level 9.
   * *   **11**: sensitive data at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the data asset.
   * 
   * @example
   * Sensitive data at level 1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset hits.
   * 
   * @example
   * \\*\\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset contains sensitive data. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The number of sensitive data objects in the data asset. For example, if the data asset is an ApsaraDB RDS instance, the value indicates the number of sensitive tables in all databases of the instance.
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
   * Tenant 1
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of data objects in the data asset. For example, if the data asset is an ApsaraDB RDS instance, the value indicates the total number of tables in all databases of the instance.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data assets.
   */
  items?: DescribeInstancesResponseBodyItems[];
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
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data assets.
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

