// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRepositoryCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact. Valid values:
   * 
   * - File: an OSS file.
   * 
   * - AcrImage: a container image.
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The region to which the artifact is uploaded.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      deployRegionId: 'DeployRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      deployRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

