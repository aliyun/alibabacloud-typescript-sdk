// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticFSVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   * 
   * @example
   * ap-xxxx
   */
  accessPointID?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * agentic-xxxx
   */
  agenticSpaceID?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 03204sl2qjiax4ocdt2
   */
  fileSystemID?: string;
  /**
   * @remarks
   * The group ID for local mounting.
   * 
   * @example
   * 1000
   */
  groupID?: number;
  /**
   * @remarks
   * The AgenticFS access point address.
   * 
   * @example
   * ap-xxxx.03204sl2qjiax4ocdt2-ljs60.cn-shanghai.nas.aliyuncs.com
   */
  serverAddr?: string;
  /**
   * @remarks
   * The user ID for local mounting.
   * 
   * @example
   * 1000
   */
  userID?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointID: 'accessPointID',
      agenticSpaceID: 'agenticSpaceID',
      fileSystemID: 'fileSystemID',
      groupID: 'groupID',
      serverAddr: 'serverAddr',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointID: 'string',
      agenticSpaceID: 'string',
      fileSystemID: 'string',
      groupID: 'number',
      serverAddr: 'string',
      userID: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

