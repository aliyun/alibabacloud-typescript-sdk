// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-5cey1sap
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

