// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * Call [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) to obtain the artifact ID.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The name of the artifact.
   * 
   * Call [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) to obtain the artifact name.
   * 
   * @example
   * gpu-test
   */
  artifactName?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * Call [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) to obtain the artifact version.
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

