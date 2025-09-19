// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseSasInstanceRequest extends $dara.Model {
  chargeType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
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

