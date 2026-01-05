// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClonePolarFsBasicSnapshotRequest extends $dara.Model {
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * pfs-test*****
   */
  polarFsInstanceId?: string;
  /**
   * @example
   * /test
   */
  sourcePath?: string;
  /**
   * @example
   * /testclone
   */
  targetPath?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
      sourcePath: 'SourcePath',
      targetPath: 'TargetPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
      sourcePath: 'string',
      targetPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

