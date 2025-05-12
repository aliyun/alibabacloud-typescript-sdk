// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildTaskResponseBodyTargetArtifact extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact that is built in the task. The value can only be IMAGE.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The ID of the repository to which the artifact that is built in the task belongs. The repository can only be an image repository. The value is the same as the ID of the repository to which the source artifact belongs.
   * 
   * @example
   * crr-1234567
   */
  repoId?: string;
  /**
   * @remarks
   * The version of the artifact that is built in the task. The artifact can only be an image.
   * 
   * @example
   * latest_accelerated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

