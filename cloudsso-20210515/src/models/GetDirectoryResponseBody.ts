// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryResponseBodyDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-06-30T08:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified.
   * 
   * @example
   * 2021-10-25T07:18:46Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: GetDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA6A9E4B-8A61-59E1-AA87-F61CA18258A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: GetDirectoryResponseBodyDirectory,
      requestId: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

