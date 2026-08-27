// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactUploadTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact upload directory, relative to the digital human artifact root directory. The value can only be empty or a directory under upload/. If not specified, upload/{YYYY-MM-DD}/ is used by default.
   * 
   * @example
   * upload/2026-05-25/
   */
  artifactPath?: string;
  static names(): { [key: string]: string } {
    return {
      artifactPath: 'artifactPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

