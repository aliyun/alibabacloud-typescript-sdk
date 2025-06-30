// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
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
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sensitivity level of the data that is not compliant with the rule. Valid values: **1** to **11**. Default value: **null**.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: specifies the S1 sensitivity level.
   * *   **3**: specifies the S2 sensitivity level.
   * *   **4**: specifies the S3 sensitivity level.
   * *   **5**: specifies the S4 sensitivity level.
   * *   **6**: specifies the S5 sensitivity level.
   * *   **7**: specifies the S6 sensitivity level.
   * *   **8**: specifies the S7 sensitivity level.
   * *   **9**: specifies the S8 sensitivity level.
   * *   **10**: specifies the S9 sensitivity level.
   * *   **11**: specifies the S10 sensitivity level.
   * *   **null**: specifies all preceding sensitivity levels.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the rule. Default value: **null**. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **null**: all states
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

