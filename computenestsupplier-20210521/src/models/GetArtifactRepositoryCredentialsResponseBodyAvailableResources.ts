// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRepositoryCredentialsResponseBodyAvailableResources extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * "/xxx/"
   */
  path?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * oss-cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * computenest-artifacts-draft-cn-hangzhou
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      regionId: 'RegionId',
      repositoryName: 'RepositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      regionId: 'string',
      repositoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

