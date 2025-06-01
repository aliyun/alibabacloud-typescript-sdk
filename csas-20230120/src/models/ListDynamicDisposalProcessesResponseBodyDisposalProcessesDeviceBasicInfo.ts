// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo extends $dara.Model {
  cpu?: string;
  devTag?: string;
  devType?: string;
  disk?: string;
  hostname?: string;
  mac?: string;
  memory?: string;
  osVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      devTag: 'DevTag',
      devType: 'DevType',
      disk: 'Disk',
      hostname: 'Hostname',
      mac: 'Mac',
      memory: 'Memory',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      devTag: 'string',
      devType: 'string',
      disk: 'string',
      hostname: 'string',
      mac: 'string',
      memory: 'string',
      osVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

