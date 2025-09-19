// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The search condition for the image baseline.
   * 
   * @example
   * ak_leak
   */
  criteria?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **BaselineNameAlias**: baseline name
   * *   **BaselineClassAlias**: baseline category
   * 
   * @example
   * BaselineNameAlias
   */
  criteriaType?: string;
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
   * The UUID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * a910053dd4710173ecc9e9d8931f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The severity of the image baseline that you want to query. Separate multiple severities with commas (,). By default, all valid values are used. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high,medium,low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      imageUuid: 'string',
      lang: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

