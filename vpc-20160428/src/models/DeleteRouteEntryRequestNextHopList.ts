// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop that is configured for ECMP routing. You can specify information about at most 16 next hops.
   * 
   * @example
   * ri-2zeo3xzyf38r43cd****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop that is configured for ECMP routing. Set the value to **RouterInterface**. You can specify information about at most 16 next hops.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

