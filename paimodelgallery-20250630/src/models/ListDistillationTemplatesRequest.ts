// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDistillationTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The template category for scenario-specific template filtering.
   * 
   * @example
   * reasoning
   */
  category?: string;
  /**
   * @remarks
   * The search keyword for cross-language substring matching against template names, descriptions, and other text fields. If this parameter is left empty, no keyword filtering is applied.
   * 
   * @example
   * inference
   */
  keyword?: string;
  /**
   * @remarks
   * The page number, starting from 1. If this parameter is not specified or is invalid, the default value 1 is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. If this parameter is not specified or is invalid, the default value is used. If the value exceeds the upper limit, the upper limit is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The template ID for exact filtering. If this parameter is left empty, no filtering by ID is applied.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

