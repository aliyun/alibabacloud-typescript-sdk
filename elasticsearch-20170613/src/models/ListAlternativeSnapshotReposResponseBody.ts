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

export class ListAlternativeSnapshotReposResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: ListAlternativeSnapshotReposResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAlternativeSnapshotReposResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

