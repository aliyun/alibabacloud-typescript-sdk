// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the paged query. Default value: **1**.
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
   * The language of the request and response. Default value: **zh_cn**.
   * Valid values:
   * 
   * - **zh_cn**: Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword to search for. Fuzzy match is supported. For example, if you enter "data", all data that contains "data" is returned.
   * 
   * @example
   * data
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of data asset instances to return on each page of a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the product to which the data asset instance belongs. You can call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to query the product ID.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the threat level for the data asset instance. The higher the threat level ID, the more sensitive the data. Valid values:
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
   * The ID of the sensitive data detection rule that the data asset instance hits. You can call the [DescribeRules](~~DescribeRules~~) operation and view the value of the **Id** parameter in the response to obtain the rule ID.
   * 
   * @example
   * 1111111
   */
  ruleId?: number;
  /**
   * @remarks
   * The region where the data asset instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
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

