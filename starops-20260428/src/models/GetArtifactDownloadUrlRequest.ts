// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reports/summary.pdf
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

