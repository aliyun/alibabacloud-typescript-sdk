// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllWhitelistTemplateResponseBodyDataTemplates } from "./DescribeAllWhitelistTemplateResponseBodyDataTemplates";


export class DescribeAllWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currPageNumbers?: number;
  /**
   * @remarks
   * Indicates whether the data that meets the conditions is displayed on the next page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Indicates whether the data that meets the conditions is displayed on the previous page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  hasPrev?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The information about whitelist templates that are returned by page.
   */
  templates?: DescribeAllWhitelistTemplateResponseBodyDataTemplates[];
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  totalPageNumbers?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 402
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currPageNumbers: 'CurrPageNumbers',
      hasNext: 'HasNext',
      hasPrev: 'HasPrev',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      templates: 'Templates',
      totalPageNumbers: 'TotalPageNumbers',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPageNumbers: 'number',
      hasNext: 'boolean',
      hasPrev: 'boolean',
      maxRecordsPerPage: 'number',
      templates: { 'type': 'array', 'itemType': DescribeAllWhitelistTemplateResponseBodyDataTemplates },
      totalPageNumbers: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

