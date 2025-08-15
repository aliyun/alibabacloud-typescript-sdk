// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 32110C73-0004-5141-9DA7-4B8045C8173A
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @example
   * utpl-N9fpjnFBSWauSXhVNP3erw
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

