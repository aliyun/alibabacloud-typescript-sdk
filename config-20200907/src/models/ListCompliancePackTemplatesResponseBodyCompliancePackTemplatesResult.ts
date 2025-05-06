// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates } from "./ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates";


export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult extends $dara.Model {
  /**
   * @remarks
   * The compliance package templates.
   */
  compliancePackTemplates?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates[];
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
   * The total number of the compliance package templates returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplates: 'CompliancePackTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplates: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compliancePackTemplates)) {
      $dara.Model.validateArray(this.compliancePackTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

