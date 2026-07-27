// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactUploadTokenRequest extends $dara.Model {
  /**
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

