// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the theme.
   * 
   * @example
   * 0f8b2c1d************9a3e5f7b1c2d
   */
  themeId?: string;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

