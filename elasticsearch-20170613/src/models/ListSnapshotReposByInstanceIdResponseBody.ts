// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotReposByInstanceIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The referenced instance ID.
   * 
   * @example
   * es-cn-6ja1ro4jt000c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The repository address.
   * 
   * @example
   * es-cn-6ja1ro4jt000c****
   */
  repoPath?: string;
  /**
   * @remarks
   * The name of the referenced repository.
   * 
   * @example
   * aliyun_snapshot_from_es-cn-6ja1ro4jt000c****
   */
  snapWarehouse?: string;
  /**
   * @remarks
   * The status of the referenced repository. Valid values:
   * - available: The repository is active.
   * - unavailable: The repository is inactive.
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      repoPath: 'repoPath',
      snapWarehouse: 'snapWarehouse',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoPath: 'string',
      snapWarehouse: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotReposByInstanceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListSnapshotReposByInstanceIdResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSnapshotReposByInstanceIdResponseBodyResult },
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

