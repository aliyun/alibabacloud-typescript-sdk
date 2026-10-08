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
   * The validity period of the temporary KubeConfig. Unit: minutes. Valid values: 15 (15 minutes) to 4320 (3 days).
   * > If this parameter is not specified, the system automatically determines a longer validity period. The specific expiration time is indicated by the value of the `expiration` field in the response.
   * 
   * @example
   * 20
   */
  temporaryDurationMinutes?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * > Reserved parameter.
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

