// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where PrivateZone is accessed.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The ID of the region where PrivateZone is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC that is associated with PrivateZone.
   * 
   * @example
   * vpc-bp18sth14qii3pnvo****
   */
  hostVpcId?: string;
  /**
   * @remarks
   * The status of PrivateZone. Valid values:
   * 
   * *   **Creating**: being created
   * *   **Active**: available
   * *   **Deleting**: being deleted
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

