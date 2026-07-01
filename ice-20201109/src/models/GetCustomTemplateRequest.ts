// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template subtype.
   * 
   * @example
   * 1
   */
  subtype?: number;
  /**
   * @remarks
   * The ID of the custom template.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the template type. This parameter is required if you omit `TemplateId` to get a default template.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtype: 'number',
      templateId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

