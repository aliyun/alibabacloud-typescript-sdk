// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyntheticProbeListRequest extends $dara.Model {
  /**
   * @remarks
   * The name or ID of the city where the carrier detection point is located.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * Specifies whether to return only detection points in data centers.
   * 
   * @example
   * false
   */
  idcProbe?: boolean;
  /**
   * @remarks
   * Specifies whether to return only IPv4 detection points.
   * 
   * @example
   * false
   */
  ipv4?: boolean;
  /**
   * @remarks
   * Specifies whether to return only IPv6 detection points.
   * 
   * @example
   * false
   */
  ipv6?: boolean;
  /**
   * @remarks
   * The name or ID of the carrier.
   * 
   * @example
   * China Unicom
   */
  isp?: string;
  /**
   * @remarks
   * Specifies whether to return only last-mile detection points.
   * 
   * @example
   * false
   */
  lmProbe?: boolean;
  /**
   * @remarks
   * Specifies whether to return only mobile detection points.
   * 
   * @example
   * false
   */
  mbProbe?: boolean;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return all detection points. Valid values:
   * 
   * - false (default): Returns the detection points that are available to you.
   * 
   * - true: Returns all detection points.
   * 
   * @example
   * true
   */
  viewAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      idcProbe: 'IdcProbe',
      ipv4: 'Ipv4',
      ipv6: 'Ipv6',
      isp: 'Isp',
      lmProbe: 'LmProbe',
      mbProbe: 'MbProbe',
      regionId: 'RegionId',
      viewAll: 'ViewAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      idcProbe: 'boolean',
      ipv4: 'boolean',
      ipv6: 'boolean',
      isp: 'string',
      lmProbe: 'boolean',
      mbProbe: 'boolean',
      regionId: 'string',
      viewAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

