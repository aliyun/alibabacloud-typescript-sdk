// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResellersResponseBodySupplierInformation extends $dara.Model {
  /**
   * @remarks
   * The description of distributor.
   * 
   * @example
   * It is a XXXX  company
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The Logo of distributor
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/31978070/service-image/d5c3b585-ff6b-4e4e-8885-xxxx.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the distributor
   * 
   * @example
   * Distributor A
   */
  supplierName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the distributor.
   * 
   * @example
   * 152xxxxxxxxxxx
   */
  supplierUid?: number;
  /**
   * @remarks
   * The URL of the distributor.
   * 
   * @example
   * http://www.aliyun.com
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierUid: 'number',
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

