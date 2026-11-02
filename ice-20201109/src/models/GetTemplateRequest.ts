// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the media assets associated with the template. Valid values:
   * - 1: Returns the associated media assets.
   * - 0: Does not return the associated media assets.
   * Default value: 0. This parameter is valid only for standard templates.
   * 
   * @example
   * 0
   */
  relatedMediaidFlag?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedMediaidFlag: 'RelatedMediaidFlag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedMediaidFlag: 'string',
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

