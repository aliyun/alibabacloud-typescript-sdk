// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4ABAEA6E-C740-5CE2-A003-643E551964F5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the simple query mode is enabled.
   * 
   * @example
   * false
   */
  simpleQuery?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * x4a0Tw5dQy2J6IRJxf4kng
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test1
   */
  templateName?: string;
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * event.errorCode: * AND event.userIdentity.accessKeyId: *
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

