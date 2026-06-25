// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySystemPropertyTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically generate preset system properties.
   * 
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @remarks
   * The URL of the property template file. The system synchronously parses the file. If the file format is invalid, a parsing error is returned.
   * 
   * > File template format: `{ "properties":{"key1":"value1", "key2":"value2"}}`.
   * 
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  /**
   * @remarks
   * The information about the system property template.
   */
  systemPropertyInfoShrink?: string;
  /**
   * @remarks
   * The ID of the property template.
   * 
   * @example
   * ap-angyvganxlf****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuto: 'EnableAuto',
      filePath: 'FilePath',
      systemPropertyInfoShrink: 'SystemPropertyInfo',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuto: 'boolean',
      filePath: 'string',
      systemPropertyInfoShrink: 'string',
      templateId: 'string',
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

