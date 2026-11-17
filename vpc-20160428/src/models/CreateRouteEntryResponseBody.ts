// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the custom route entry.
   * 
   * @example
   * rte-sn6vjkioxte1gz83z****
   */
  routeEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeEntryId: 'RouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

