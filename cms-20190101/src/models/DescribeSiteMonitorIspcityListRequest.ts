// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorISPCityListRequest extends $dara.Model {
  /**
   * @remarks
   * The name or ID of the city.
   * 
   * > City names support fuzzy match.
   */
  city?: string;
  /**
   * @remarks
   * Specifies whether to query IPv4 probes. Valid values:
   * 
   * *   true (default): IPv4 probes are queried.
   * *   false: IPv4 probes are not queried.
   * 
   * @example
   * true
   */
  IPV4?: boolean;
  /**
   * @remarks
   * Specifies whether to query IPv6 probes. Valid values:
   * 
   * *   true (default): IPv6 probes are queried.
   * *   false: IPv6 probes are not queried.
   * 
   * @example
   * true
   */
  IPV6?: boolean;
  /**
   * @remarks
   * The name or ID of the carrier.
   * 
   * > Carrier names support fuzzy match.
   */
  isp?: string;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return all detection points. Valid values:
   * 
   * *   true (default): returns all detection points.
   * *   false: returns only available detection points.
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

