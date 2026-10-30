// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 404DA7EC-F495-44B5-B543-6EDCDF90F3D1
   */
  requestId?: string;
  /**
   * @remarks
   * The Enterprise Edition transit router instance ID, which is used to forward traffic and perform routing. After the instance is created, it is in the Creating state. You must wait until the instance enters the Active state before you can proceed to What to do next. You can invoke the ListTransitRouters operation to query the instance status.
   * 
   * @example
   * tr-uf6llz2286805i44g****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

