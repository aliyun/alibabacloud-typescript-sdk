// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAcrImageTagsRequest extends $dara.Model {
  /**
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @example
   * 788E7CP0EN9D51P
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
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      clientToken: 'string',
      regionId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

