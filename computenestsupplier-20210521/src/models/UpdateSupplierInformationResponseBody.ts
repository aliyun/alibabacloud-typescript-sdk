// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSupplierInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The description of service provider.
   * 
   * @example
   * Test supplier
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://www.xxx.xxx.cn
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supplierDesc: 'SupplierDesc',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supplierDesc: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

