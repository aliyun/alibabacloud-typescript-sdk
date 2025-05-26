// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateId: 'string',
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

