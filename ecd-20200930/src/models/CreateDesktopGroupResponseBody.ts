// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the desktop group.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The desktop group IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The order IDs.
   */
  orderIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3EB7FCEE-D731-4948-85A3-4B2C341CA983
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroupIds)) {
      $dara.Model.validateArray(this.desktopGroupIds);
    }
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

