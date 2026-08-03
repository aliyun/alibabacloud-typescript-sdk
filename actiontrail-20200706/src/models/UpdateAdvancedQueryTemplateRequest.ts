// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdvancedQueryTemplateRequest extends $dara.Model {
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
   * The template ID.
   * 
   * This parameter is required.
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

