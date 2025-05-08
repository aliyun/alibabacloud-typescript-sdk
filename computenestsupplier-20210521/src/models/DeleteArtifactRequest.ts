// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

