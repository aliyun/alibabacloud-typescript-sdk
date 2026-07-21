// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCoordinationForMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * The list of coordination flow IDs.
   * 
   * This parameter is required.
   */
  coIds?: string[];
  /**
   * @remarks
   * The ID of the end user who initiated the coordination flow. This parameter is not required if the request is initiated by an administrator.
   * 
   * @example
   * alice
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
   * The user type.
   * 
   * @example
   * TENANT_ADMIN
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      coIds: 'CoIds',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coIds)) {
      $dara.Model.validateArray(this.coIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

