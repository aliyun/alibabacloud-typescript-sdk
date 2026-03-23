// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  keyPair?: string;
  password?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      keyPair: 'KeyPair',
      password: 'Password',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      keyPair: 'string',
      password: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

