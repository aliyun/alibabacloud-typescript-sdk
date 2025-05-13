// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotReposByInstanceIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Reference instance ID.
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
   * es-cn-6ja1ro4jt000c****
   */
  repoPath?: string;
  /**
   * @remarks
   * Reference warehouse name.
   * 
   * @example
   * aliyun_snapshot_from_es-cn-6ja1ro4jt000c****
   */
  snapWarehouse?: string;
  /**
   * @remarks
   * Reference warehouse status. available indicates that it is valid. unavailable indicates that it is invalid.
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

