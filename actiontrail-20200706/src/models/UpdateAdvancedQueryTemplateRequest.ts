// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdvancedQueryTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * x4a0Tw5dQy2J6IRJxf4kng
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * event.eventName: ConsoleSignin AND event.userIdentity.type: root-account
   */
  templateSql?: string;
  static names(): { [key: string]: string } {
    return {
      simpleQuery: 'SimpleQuery',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSql: 'TemplateSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleQuery: 'boolean',
      templateId: 'string',
      templateName: 'string',
      templateSql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

