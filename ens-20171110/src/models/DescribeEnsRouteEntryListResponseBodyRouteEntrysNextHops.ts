// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * i-bp1111yup9991890woxq
   */
  nextHopId?: string;
  /**
   * @remarks
   * The instance ID of the next hop.
   * 
   * @example
   * testInstance
   */
  nextHopName?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopName: 'NextHopName',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopName: 'string',
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

