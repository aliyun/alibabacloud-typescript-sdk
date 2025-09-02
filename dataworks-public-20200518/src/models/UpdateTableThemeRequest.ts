// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the theme.
   * 
   * This parameter is required.
   * 
   * @example
   * table folder name
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the theme.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'number',
      themeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

