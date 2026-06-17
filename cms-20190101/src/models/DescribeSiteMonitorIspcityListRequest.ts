// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorISPCityListRequest extends $dara.Model {
  /**
   * @remarks
   * The name or ID of the city where the carrier detection point resides.
   * 
   * > Fuzzy match is supported for city names.
   * 
   * @example
   * Guiyang
   */
  city?: string;
  /**
   * @remarks
   * Specifies whether to query IPv4 probes. Valid values:
   * - true (default): Queries IPv4 probes.
   * - false: Does not query IPv4 probes.
   * 
   * @example
   * true
   */
  IPV4?: boolean;
  /**
   * @remarks
   * Specifies whether to query IPv6 probes. Valid values:
   * - true (default): Queries IPv6 probes.
   * - false: Does not query IPv6 probes.
   * 
   * @example
   * true
   */
  IPV6?: boolean;
  /**
   * @remarks
   * The name or ID of the carrier detection point.
   * 
   * > Fuzzy match is supported for carrier names.
   * 
   * @example
   * China Unicom
   */
  isp?: string;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return all detection points. Valid values:
   * 
   * - true (default): Returns all detection points.
   * - false: Returns only available detection points.
   * 
   * @example
   * true
   */
  viewAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      IPV4: 'IPV4',
      IPV6: 'IPV6',
      isp: 'Isp',
      regionId: 'RegionId',
      viewAll: 'ViewAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      IPV4: 'boolean',
      IPV6: 'boolean',
      isp: 'string',
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

