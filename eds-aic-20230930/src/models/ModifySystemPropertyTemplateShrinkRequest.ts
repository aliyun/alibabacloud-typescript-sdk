// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySystemPropertyTemplateShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  systemPropertyInfoShrink?: string;
  /**
   * @example
   * ap-angyvganxlf****
   */
  templateId?: string;
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

