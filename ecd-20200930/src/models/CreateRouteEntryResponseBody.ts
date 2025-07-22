// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryResponseBody extends $dara.Model {
  requestId?: string;
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

