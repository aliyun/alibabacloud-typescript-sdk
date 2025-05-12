// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCoordinationForMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of stream collaboration tasks.
   * 
   * This parameter is required.
   */
  coIds?: string[];
  /**
   * @remarks
   * The ID of the end user that initiates stream collaboration. If the initiator is the administrator, skip this parameter.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/436773.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid value:
   * 
   * * TENANT_ADMIN: administrator.
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

