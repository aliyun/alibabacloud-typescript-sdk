// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which the data asset table belongs. Call the [DescribeInstances](~~DescribeInstances~~) operation to obtain this ID.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search is supported. For example, if you enter test, all results that contain test are returned.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the package to which the data asset table belongs. Call the [DescribePackages](~~DescribePackages~~) operation to obtain this ID.
   * 
   * @example
   * 555555
   */
  packageId?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the product to which the data asset table belongs. Valid values include MaxCompute, OSS, ADS, OTS, and RDS. For more information about the supported products, see [Data asset types that support sensitive data detection](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the product to which the data asset table belongs. Call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to obtain this ID.
   * 
   * @example
   * 1
   */
  productId?: number;
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
   * The ID of the sensitive data detection rule that the data asset table hits. Call the [DescribeRules](~~DescribeRules~~) operation to obtain this ID.
   * 
   * @example
   * 333322
   */
  ruleId?: number;
  /**
   * @remarks
   * The region where Data Security Center is available. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific template.
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

