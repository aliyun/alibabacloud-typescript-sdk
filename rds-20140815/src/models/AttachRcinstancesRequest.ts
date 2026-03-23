// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string[];
  keyPair?: string;
  password?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPair: 'KeyPair',
      password: 'Password',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      password: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

