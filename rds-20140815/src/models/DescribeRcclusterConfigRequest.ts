// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClusterConfigRequest extends $dara.Model {
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
   * The validity period of the temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
   * 
   * >  If you do not specify this parameter, the system specifies a longer validity period. The validity period is returned in the `expiration` parameter.
   * 
   * @example
   * 20
   */
  temporaryDurationMinutes?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * >  This is a reserved parameter.
   * 
   * @example
   * None
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      temporaryDurationMinutes: 'TemporaryDurationMinutes',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      temporaryDurationMinutes: 'number',
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

