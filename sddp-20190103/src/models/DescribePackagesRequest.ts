// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset instance to which the data asset package belongs.
   * 
   * > To query the list of MaxCompute data asset packages that are authorized for an SDPP connection by instance ID, call the **DescribeInstances** operation to obtain the instance ID.
   * 
   * @example
   * 12321
   */
  instanceId?: number;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh_cn**. Valid values:
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
   * The keyword for the search. Fuzzy matching is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the product to which the data asset package belongs.
   * 
   * > To query the list of MaxCompute data asset packages that are authorized for an SDPP connection by product ID, call the **DescribeDataAssets** operation to obtain the product ID.
   * 
   * @example
   * 2566600
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the risk level for the data asset package.
   * 
   * - **1**: N/A: No sensitive data is detected.
   * 
   * - **2**: S1: Level 1 sensitive data.
   * 
   * - **3**: S2: Level 2 sensitive data.
   * 
   * - **4**: S3: Level 3 sensitive data.
   * 
   * - **5**: S4: Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the data asset package matches.
   * 
   * > To query the list of MaxCompute data asset packages that are authorized for an SDPP connection by the ID of a matching sensitive data detection rule, call the **DescribeRules** operation to obtain the rule ID.
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

