// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryResponseBodyDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-10T04:04:04Z
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
   * The time when the directory was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-10T04:04:04Z
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

