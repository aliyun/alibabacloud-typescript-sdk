// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyntheticProbeListRequest extends $dara.Model {
  city?: string;
  /**
   * @example
   * false
   */
  idcProbe?: boolean;
  /**
   * @example
   * false
   */
  ipv4?: boolean;
  /**
   * @example
   * false
   */
  ipv6?: boolean;
  isp?: string;
  /**
   * @example
   * false
   */
  lmProbe?: boolean;
  /**
   * @example
   * false
   */
  mbProbe?: boolean;
  regionId?: string;
  /**
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

