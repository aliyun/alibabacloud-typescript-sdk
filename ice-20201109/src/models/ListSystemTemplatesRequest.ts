// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * SampleTemplate
   */
  name?: string;
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
   * The number of entries per page. Default value: 20 Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The template state. Valid values: Normal, Invisible, and All.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The subtype ID of the template.
   * 
   * @example
   * 1
   */
  subtype?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The template type. Separate multiple types with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      subtype: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

