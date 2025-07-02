// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoRenewInstanceParam extends $dara.Model {
  autoRenew?: string;
  autoRenewDuration?: string;
  autoRenewDurationUnit?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewDuration: 'string',
      autoRenewDurationUnit: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

