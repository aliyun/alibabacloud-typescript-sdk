// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 145318BE-DEE1-4C57-AA7C-5BE7D34A6AE0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  simpleQuery?: string;
  /**
   * @example
   * utpl-QNL3dpYkQcyjZxrIQCciqQ
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * event.userIdentity.type: root-account AND event.userIdentity.accessKeyId: *
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

