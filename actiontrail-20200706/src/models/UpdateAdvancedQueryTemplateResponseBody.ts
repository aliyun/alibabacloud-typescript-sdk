// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 145318BE-DEE1-4C57-AA7C-5BE7D34A6AE0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the simple query mode is enabled.
   * 
   * @example
   * true
   */
  simpleQuery?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * utpl-QNL3dpYkQcyjZxrIQC****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template. The maximum length is 64 characters.
   * 
   * @example
   * example-template
   */
  templateName?: string;
  /**
   * @remarks
   * The query statement of the template.
   * 
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

