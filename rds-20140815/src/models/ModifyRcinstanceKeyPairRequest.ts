// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceKeyPairRequest extends $dara.Model {
  instanceId?: string;
  keyPairName?: string;
  reboot?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      reboot: 'Reboot',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyPairName: 'string',
      reboot: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

