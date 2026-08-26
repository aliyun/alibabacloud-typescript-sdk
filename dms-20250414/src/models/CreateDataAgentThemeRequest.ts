// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The application scenario, which affects filtering when viewing the theme list in the console. Valid values:
   * 
   * - (Recommended) custom: a user-uploaded custom theme with no preset style or information organization structure.
   * - report: a web report that conforms to the DataAgent information organization structure.
   * - (Not supported) infographic: an infographic that conforms to the DataAgent information organization structure.
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
   * - upload: uploaded through OSS.
   * - (Not supported) public_url: provided through an OSS URL that allows public network access.
   * - (Not supported) user_oss: provided through a user OSS URL.
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
   * The display name of the theme. The value can be up to 64 characters in length. This parameter is required during creation.
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
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      fileFrom: 'FileFrom',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
      themeType: 'ThemeType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

