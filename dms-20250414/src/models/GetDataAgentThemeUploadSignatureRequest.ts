// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentThemeUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The theme UUID. By default, you do not need to specify this parameter because the backend automatically generates and returns a UUID. Specify this parameter to regenerate a signature only when the previous signature has expired.
   * 
   * @example
   * 0f8b2c1d-****-****-****-9a3e5f7b1c2d
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

