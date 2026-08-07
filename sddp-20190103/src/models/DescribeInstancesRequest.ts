// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese (Simplified).
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported. For example, if you enter data, all data entries that contain data in the search item are returned.
   * 
   * @example
   * data
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of data asset instances to return on each page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the product to which the data asset instance belongs. You can call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to obtain the product ID.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The risk level ID of the data asset instance. A higher risk level ID indicates more sensitive data is detected. Valid values:
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
   * The ID of the sensitive data detection rule that the data asset instance hits. You can call the [DescribeRules](~~DescribeRules~~) operation and obtain the rule ID from the **Id** response parameter.
   * 
   * @example
   * 1111111
   */
  ruleId?: number;
  /**
   * @remarks
   * The region of the data asset instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

