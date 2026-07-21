// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeCoordinatePrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The coordination stream ID. This value is the `Coid` returned by the [ApplyCoordinationForMonitoring](~~ApplyCoordinationForMonitoring~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * co-fqsm6e8ee75w61fp9
   */
  coId?: string;
  /**
   * @remarks
   * The username of the end user.
   * 
   * @example
   * zhangsan
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the coordination user.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT_ADMIN
   */
  userType?: string;
  /**
   * @remarks
   * The UUID (unique identifier) of the device.
   * 
   * @example
   * C78CA9E99315687575DD2844C1F3****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

