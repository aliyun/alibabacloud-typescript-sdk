// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseRequest extends $dara.Model {
  /**
   * @remarks
   * The use case of the certificate warehouse.
   * 
   * @example
   * contract
   */
  biz?: string;
  /**
   * @remarks
   * The name of the certificate warehouse.
   * 
   * @example
   * MyCertificateWarehouse
   */
  name?: string;
  /**
   * @remarks
   * The type of the certificate warehouse. Valid values:
   * 
   * @example
   * pcaCertificate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

