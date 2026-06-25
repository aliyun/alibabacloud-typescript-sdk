// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSystemPropertyTemplateShrinkRequest extends $dara.Model {
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
   * The URL of the property template file. The API parses the file synchronously. An error is returned if the file format is invalid.
   * 
   * > The file must be in the following format: `{ "properties":{"key1":"value1"}}`.
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
   * The name of the template. The name must meet the following requirements:
   * 
   * - Be 2 to 32 characters in length.
   * 
   * - Start with an uppercase or lowercase letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - Contain letters, digits, colons (:), underscores (_), and hyphens (-). Periods (.) are not supported.
   * 
   * @example
   * Template1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuto: 'EnableAuto',
      filePath: 'FilePath',
      systemPropertyInfoShrink: 'SystemPropertyInfo',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuto: 'boolean',
      filePath: 'string',
      systemPropertyInfoShrink: 'string',
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

