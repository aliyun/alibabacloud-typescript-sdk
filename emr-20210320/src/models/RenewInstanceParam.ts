// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceParam extends $dara.Model {
  instanceId?: string;
  renewDuration?: number;
  renewDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      renewDuration: 'RenewDuration',
      renewDurationUnit: 'RenewDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      renewDuration: 'number',
      renewDurationUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

