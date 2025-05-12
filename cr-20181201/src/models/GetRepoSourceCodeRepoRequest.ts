// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

