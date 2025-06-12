// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsTemplatesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1715*****38
   */
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

