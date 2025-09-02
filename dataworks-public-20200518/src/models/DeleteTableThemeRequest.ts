// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
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
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

