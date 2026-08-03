// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvancedQueryTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return.
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the template. This operation performs a case-insensitive, fuzzy match. If you do not specify a name, all templates are returned.
   * 
   * For example, if you specify `a`, templates named `a1` and `a2` are returned. If you leave this parameter empty, templates named `a1`, `a2`, `b1`, and `c1` are returned.
   * 
   * @example
   * example-template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

