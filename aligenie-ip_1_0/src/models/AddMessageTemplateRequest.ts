// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMessageTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: 'string',
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

