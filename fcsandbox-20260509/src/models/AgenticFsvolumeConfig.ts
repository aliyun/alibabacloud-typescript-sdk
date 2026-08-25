// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticFSVolumeConfig extends $dara.Model {
  groupID?: number;
  serverAddr?: string;
  userID?: number;
  static names(): { [key: string]: string } {
    return {
      groupID: 'groupID',
      serverAddr: 'serverAddr',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

