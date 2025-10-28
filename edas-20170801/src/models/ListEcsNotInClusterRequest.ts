// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsNotInClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   1: classic network
   * *   2: virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required if the NetworkMode parameter is set to 2.
   * 
   * @example
   * vpc-2zef6ob8****v8x3q46kp
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      networkMode: 'NetworkMode',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'number',
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

