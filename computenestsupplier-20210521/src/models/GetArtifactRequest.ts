// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * gpu-test
   */
  artifactName?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 1
   */
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactName: 'ArtifactName',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactName: 'string',
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

