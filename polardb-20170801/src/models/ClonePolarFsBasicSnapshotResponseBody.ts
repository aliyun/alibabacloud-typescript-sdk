// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClonePolarFsBasicSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * pc-bp150t3****
   */
  DBClusterId?: string;
  /**
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
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
      requestId: 'RequestId',
      sourcePath: 'SourcePath',
      targetPath: 'TargetPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
      requestId: 'string',
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

