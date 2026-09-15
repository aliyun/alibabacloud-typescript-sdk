// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticFSVolumeConfig extends $dara.Model {
  accessPointID?: string;
  agenticSpaceID?: string;
  fileSystemID?: string;
  groupID?: number;
  serverAddr?: string;
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

