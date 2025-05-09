// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityRulesResponseBodyPagingInfoDataQualityRules } from "./ListDataQualityRulesResponseBodyPagingInfoDataQualityRules";


export class ListDataQualityRulesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The rules.
   */
  dataQualityRules?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRules[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRules: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRules)) {
      $dara.Model.validateArray(this.dataQualityRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

