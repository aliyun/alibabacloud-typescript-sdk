// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  /**
   * @remarks
   * The ID of the route entry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

