// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataAgentThemeRequest extends $dara.Model {
  /**
   * @example
   * weekly report
   */
  description?: string;
  /**
   * @example
   * 0f8b2c1d-****-****-****-9a3e5f7b1c2d
   */
  themeId?: string;
  /**
   * @example
   * weekly report
   */
  themeName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      themeId: 'string',
      themeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

