// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 4ABAEA6E-C740-5CE2-A003-643E551964F5
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  simpleQuery?: string;
  /**
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
      requestId: 'RequestId',
      simpleQuery: 'SimpleQuery',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSql: 'TemplateSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      simpleQuery: 'string',
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

