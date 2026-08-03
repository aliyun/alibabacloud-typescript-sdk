// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32110C73-0004-5141-9DA7-4B8045C8173A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether simple search mode is enabled. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * utpl-N9fpjnFBSWauSXhVNP****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * example-template
   */
  templateName?: string;
  /**
   * @remarks
   * The query statement.
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

