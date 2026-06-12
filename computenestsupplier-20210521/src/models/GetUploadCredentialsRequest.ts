// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * template.yaml
   */
  fileName?: string;
  /**
   * @remarks
   * The visibility of the bucket to which the file is uploaded. Valid values: public and private. A value of **public** means the file is uploaded to a public bucket. A value of **private** means the file is uploaded to a private bucket that requires authorization for access.
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

