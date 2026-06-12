// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAcrImageRepositoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact. The default value is AcrImage. Valid values:
   * 
   * - HelmChart: A Helm Chart image.
   * 
   * - AcrImage: A container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value for this parameter from your client. Make sure that the value is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The image repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-7x9rf32mkqoqulrn
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      clientToken: 'string',
      regionId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

