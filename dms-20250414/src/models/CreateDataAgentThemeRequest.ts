// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario, which affects the filtering when you view the theme list in the console. Valid values:
   * 
   * - (Recommended) custom: A user-uploaded custom theme with no preset style or information organization structure.
   * - report: A web report that conforms to the DataAgent information organization structure.
   * - (Not supported) infographic: An infographic that conforms to the DataAgent information organization structure.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The description. The value can be up to 255 characters in length.
   * 
   * @example
   * weekly report
   */
  description?: string;
  /**
   * @remarks
   * The file source, which affects the backend logic for determining whether the theme is valid. Valid values:
   * 
   * - upload: The file is uploaded through OSS.
   * - (Not supported) public_url: The file is provided through a public network access OSS URL.
   * - (Not supported) user_oss: The file is provided through a user OSS URL.
   * 
   * @example
   * upload
   */
  fileFrom?: string;
  /**
   * @remarks
   * The UUID of the theme. The value must be returned by GetDataAgentThemeUploadSignature, and the file must have been uploaded. If the UUID is forged or the file has not been uploaded, the creation fails.
   * 
   * @example
   * 0f8b2c1d************9a3e5f7b1c2d
   */
  themeId?: string;
  /**
   * @remarks
   * The display name of the theme. The value can be up to 64 characters in length. This parameter is required when you create a theme.
   * 
   * @example
   * weekly report
   */
  themeName?: string;
  /**
   * @remarks
   * The type of the custom theme. Valid values:
   * 
   * - (Default) template: The theme is a template.
   * - (Not supported) design: The theme is a DESIGN.md file.
   * 
   * @example
   * template
   */
  themeType?: string;
  /**
   * @remarks
   * The workspace to which the theme belongs. If this parameter is not specified or is set to personal, the personal workspace is used. You can also specify a collaboration workspace ID.
   * 
   * @example
   * 99fad******qg6c0l4nlacu
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      fileFrom: 'FileFrom',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
      themeType: 'ThemeType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      fileFrom: 'string',
      themeId: 'string',
      themeName: 'string',
      themeType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

