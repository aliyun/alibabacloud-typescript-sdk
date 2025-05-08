// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRepositoryCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   File: Object Storage Service (OSS) object.
   * *   AcrImage: container image.
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The region ID.
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

