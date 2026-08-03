// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the simple query mode.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @remarks
   * The name of the template, which can contain a maximum of 64 characters. Uniqueness is not required.
   * 
   * @example
   * test1
   */
  templateName?: string;
  /**
   * @remarks
   * The query statement of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * event.errorCode: * AND event.userIdentity.accessKeyId: *
   */
  templateSql?: string;
  static names(): { [key: string]: string } {
    return {
      simpleQuery: 'SimpleQuery',
      templateName: 'TemplateName',
      templateSql: 'TemplateSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleQuery: 'boolean',
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

