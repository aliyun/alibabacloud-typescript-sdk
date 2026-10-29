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
   * Specifies whether to query only IDC detection points.
   * 
   * @example
   * false
   */
  idcProbe?: boolean;
  /**
   * @remarks
   * Specifies whether to show only IPv4 nodes.
   * 
   * @example
   * false
   */
  ipv4?: boolean;
  /**
   * @remarks
   * Specifies whether to show only IPv6 nodes.
   * 
   * @example
   * false
   */
  ipv6?: boolean;
  /**
   * @remarks
   * The name or ID of the carrier detection point.
   * 
   * @example
   * China Unicom
   */
  isp?: string;
  /**
   * @remarks
   * Specifies whether to query only Lastmile residential broadband nodes.
   * 
   * @example
   * false
   */
  lmProbe?: boolean;
  /**
   * @remarks
   * Specifies whether to query only mobile detection points.
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
   * - false: Returns only the detection points available to the user. This is the default value.
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

