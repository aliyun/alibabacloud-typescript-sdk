// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The node IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The key pair of the node.
   * 
   * @example
   * Custom_test
   */
  keyPair?: string;
  /**
   * @remarks
   * The logon password of the node.
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * > This is a reserved parameter.
   * 
   * @example
   * None
   */
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

