// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClonePolarFsBasicSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database cluster.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Polarlakebase instance.
   * 
   * @example
   * pfs-test*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The source path of the file resource. This parameter is empty if the type is local.
   * 
   * @example
   * /test
   */
  sourcePath?: string;
  /**
   * @remarks
   * The destination path.
   * 
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

