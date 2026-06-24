// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The default value is **1**.
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
   * The language of the request and response. The default value is **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese.
   * 
   * - **en_us**: US English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of template rules to return on each page. The default value is **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level of the template rule. The value ranges from **1** to **11**. The default value is **null**. Valid values:
   * 
   * - **1**: No risk.
   * 
   * - **2**: S1.
   * 
   * - **3**: S2.
   * 
   * - **4**: S3.
   * 
   * - **5**: S4.
   * 
   * - **6**: S5.
   * 
   * - **7**: S6.
   * 
   * - **8**: S7.
   * 
   * - **9**: S8.
   * 
   * - **10**: S9.
   * 
   * - **11**: S10.
   * 
   * - **null**: All risk levels, including No risk, S1, S2, S3, S4, S5, S6, S7, S8, S9, and S10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the template rule. The default value is **null**. Valid values:
   * 
   * - **0**: The rule is disabled.
   * 
   * - **1**: The rule is enabled.
   * 
   * - **null**: All rules are returned, regardless of their status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevelId: 'RiskLevelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevelId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

