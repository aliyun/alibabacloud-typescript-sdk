// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccRouteEntryRequest extends $dara.Model {
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
   * Lingjun Connection ID
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-rte-31ocvdhq
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

