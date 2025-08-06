// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706a0063dd733f6a823ef32e0a5****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

