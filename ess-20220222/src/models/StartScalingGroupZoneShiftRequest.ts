// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartScalingGroupZoneShiftRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see Ensure idempotence.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The expiration time of the zone transfer. After the time expires, the system automatically ends the transfer and restores the related zones. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. The value must be later than the current time and cannot be more than 3 days after the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-01T12:05Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The IDs of the impaired zones. Valid values of N: 1 to 5.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  impairedZoneIds?: string[];
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      expiryTime: 'ExpiryTime',
      impairedZoneIds: 'ImpairedZoneIds',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expiryTime: 'string',
      impairedZoneIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.impairedZoneIds)) {
      $dara.Model.validateArray(this.impairedZoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

