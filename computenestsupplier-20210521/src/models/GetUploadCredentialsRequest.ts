// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The file name to upload.
   * 
   * This parameter is required.
   * 
   * @example
   * template.yaml
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether the file is publicly accessible. Valid values: **public** or **private**. The default value is **private**.
   * 
   * @example
   * public
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

