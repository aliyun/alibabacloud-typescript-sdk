// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCenResponseBodyRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the route.
   * 
   * @example
   * 172.16.111.3****
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance corresponding to the route.
   * 
   * @example
   * vpc-uf62bu0xs5j8md54p****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the route.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The verification result of the route.
   * 
   * Valid values:
   * 
   * *   Conflict: A CIDR block conflict exists.
   * *   Access: The verification is passed.
   * 
   * @example
   * Access
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      regionId: 'string',
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

