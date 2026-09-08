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
   * The Enterprise Edition transit router instance ID. After creation, the instance is in the Creating state. Wait until the instance status changes to Active before performing subsequent operations. You can call the [ListTransitRouters](https://help.aliyun.com/document_detail/261219.html) operation to query the Enterprise Edition transit router instance status.
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

