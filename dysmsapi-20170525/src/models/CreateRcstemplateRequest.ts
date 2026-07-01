// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCSTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  relatedSignNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  templateContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  templateFormat?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  templateMenu?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateRule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      relatedSignNames: 'RelatedSignNames',
      templateContent: 'TemplateContent',
      templateFormat: 'TemplateFormat',
      templateMenu: 'TemplateMenu',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedSignNames: 'string',
      templateContent: 'string',
      templateFormat: 'string',
      templateMenu: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

