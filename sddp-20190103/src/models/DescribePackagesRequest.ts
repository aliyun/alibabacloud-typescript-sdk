// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which the package belongs.
   * 
   * > You can call the **DescribeInstances** operation to query the ID of the instance.
   * 
   * @example
   * 12321
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
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the service to which the package belongs.
   * 
   * > You can call the **DescribeDataAssets** operation to query the ID of the service.
   * 
   * @example
   * 2566600
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the package. Valid values:
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
   * The ID of the sensitive data detection rule that the package hits.
   * 
   * > You can call the **DescribeRules** operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 266666
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

