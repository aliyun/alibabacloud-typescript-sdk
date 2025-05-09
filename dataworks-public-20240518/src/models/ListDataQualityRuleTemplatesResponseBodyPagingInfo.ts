// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates } from "./ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates";


export class ListDataQualityRuleTemplatesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The templates.
   */
  dataQualityRuleTemplates?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityRuleTemplates: 'DataQualityRuleTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRuleTemplates: { 'type': 'array', 'itemType': ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRuleTemplates)) {
      $dara.Model.validateArray(this.dataQualityRuleTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

