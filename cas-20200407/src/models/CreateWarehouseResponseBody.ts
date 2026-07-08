// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0206B77-14B9-584C-8A3A-09D5827FBC50
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the certificate warehouse.
   * 
   * @example
   * cas-wh-typ-serial
   */
  warehouseInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warehouseInstanceId: 'WarehouseInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warehouseInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

