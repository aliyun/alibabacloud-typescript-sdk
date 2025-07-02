// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceUpgradeStatusRequest extends $dara.Model {
  appVersion?: string;
  clientUid?: string;
  project?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      clientUid: 'ClientUid',
      project: 'Project',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      clientUid: 'string',
      project: 'string',
      taskUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

