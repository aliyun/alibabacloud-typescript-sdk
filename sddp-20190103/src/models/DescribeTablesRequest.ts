// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs. You can call the [DescribeInstances](~~DescribeInstances~~) operation to obtain the ID of the data asset.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported. For example, if you specify test, all tables whose names contain test are retrieved.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the package to which the table belongs. You can call the [DescribePackages](~~DescribePackages~~) operation to obtain the ID of the package.
   * 
   * @example
   * 555555
   */
  packageId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the table belongs, such as MaxCompute, OSS, and ApsaraDB RDS. For more information about the types of data assets from which Data Security Center (DSC) can scan for sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the table belongs. You can call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to obtain the ID of the service.
   * 
   * @example
   * 1
   */
  productId?: number;
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
   * The ID of the sensitive data detection rule that the table hits. You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the ID of the sensitive data detection rule.
   * 
   * @example
   * 333322
   */
  ruleId?: number;
  /**
   * @remarks
   * The region in which DSC is activated. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      name: 'Name',
      packageId: 'PackageId',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'number',
      lang: 'string',
      name: 'string',
      packageId: 'number',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

