// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTablesResponseBodyItemsRuleList } from "./DescribeTablesResponseBodyItemsRuleList";


export class DescribeTablesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The point in time when the table was created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 222
   */
  id?: number;
  /**
   * @remarks
   * The description of the data asset.
   * 
   * @example
   * Description 1
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the data asset to which the table belongs.
   * 
   * @example
   * Data Asset 1
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the table belongs.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**. For more information about the types of data assets from which DSC can scan for sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the table belongs.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The sensitivity level of the table. Each sensitivity level ID corresponds to a sensitivity level name. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the table. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The information about the sensitive data detection rules that are hit.
   */
  ruleList?: DescribeTablesResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Indicates whether the table contains sensitive fields. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive fields in the table.
   * 
   * @example
   * 32
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive fields in the table.
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
   * Tenant 1
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the table.
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

