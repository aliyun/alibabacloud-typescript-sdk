// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDistillationTemplatesRequest extends $dara.Model {
  /**
   * @example
   * reasoning
   */
  category?: string;
  /**
   * @example
   * 推理
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @example
   * scenario
   */
  templateKind?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
      templateKind: 'TemplateKind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      templateId: 'string',
      templateKind: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

