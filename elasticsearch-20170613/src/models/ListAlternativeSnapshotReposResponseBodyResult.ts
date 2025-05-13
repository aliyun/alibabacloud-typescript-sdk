// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlternativeSnapshotReposResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * es-cn-6ja1ro4jt000c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The address of the repository.
   * 
   * @example
   * RepoPath
   */
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      repoPath: 'repoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

