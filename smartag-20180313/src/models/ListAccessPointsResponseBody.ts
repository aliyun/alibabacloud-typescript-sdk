// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointsResponseBodyAccessPoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * 401
   */
  accessPointId?: number;
  /**
   * @remarks
   * The number of available SAG instances in the access point.
   * 
   * @example
   * 0
   */
  activeSmartAGCount?: number;
  /**
   * @remarks
   * The number of offline SAG instances in the access point.
   * 
   * @example
   * 7
   */
  inactiveSmartAGCount?: number;
  /**
   * @remarks
   * The latitude of the access point.
   * 
   * @example
   * 103.81****
   */
  latitude?: string;
  /**
   * @remarks
   * The longitude of the access point.
   * 
   * @example
   * 1.35****
   */
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      activeSmartAGCount: 'ActiveSmartAGCount',
      inactiveSmartAGCount: 'InactiveSmartAGCount',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'number',
      activeSmartAGCount: 'number',
      inactiveSmartAGCount: 'number',
      latitude: 'string',
      longitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPoints?: ListAccessPointsResponseBodyAccessPoints[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E26DBAAE-A796-4A48-98B4-B45AFCD1F299
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access points.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': ListAccessPointsResponseBodyAccessPoints },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPoints)) {
      $dara.Model.validateArray(this.accessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

