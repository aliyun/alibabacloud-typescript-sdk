// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAcrImageRepositoriesRequest extends $dara.Model {
  /**
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
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

