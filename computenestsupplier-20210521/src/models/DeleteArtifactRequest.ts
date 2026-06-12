// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * Call [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) to obtain the artifact ID.
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
   * Call [ListArtifactVersions](https://help.aliyun.com/document_detail/469995.html) to obtain the artifact version.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. Make sure that the token is unique for each request. **ClientToken** supports only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 10CM943JP0EN9D51H
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

