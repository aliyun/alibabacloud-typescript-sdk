// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactRisksRequest extends $dara.Model {
  /**
   * @remarks
   * Artifact ID.
   * 
   * @example
   * artifact-3fd95cdfdf0d4b1fa00c
   */
  artifactId?: string;
  /**
   * @remarks
   * Artifact version.
   * 
   * @example
   * 1
   */
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

