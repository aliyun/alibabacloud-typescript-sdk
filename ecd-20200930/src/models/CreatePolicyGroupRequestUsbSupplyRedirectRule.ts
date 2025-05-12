// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Test rule
   */
  description?: string;
  /**
   * @remarks
   * The class of the device. If you set the `usbRuleType` parameter to 1, you must specify this parameter. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * 0Eh
   */
  deviceClass?: string;
  /**
   * @remarks
   * The subclass of the device. If you set the `usbRuleType` parameter to 1, you must specify this parameter. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).
   * 
   * @example
   * xxh
   */
  deviceSubclass?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 08**
   */
  productId?: string;
  /**
   * @remarks
   * The type of USB redirection.
   * 
   * Valid values:
   * 
   * *   1: allows USB redirection
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   2: forbids USB redirection
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 1
   */
  usbRedirectType?: number;
  /**
   * @remarks
   * The type of the USB redirection rule.
   * 
   * Valid values:
   * 
   * *   1: by device class
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   2: by device vendor
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 1
   */
  usbRuleType?: number;
  /**
   * @remarks
   * The ID of the vendor. For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 04**
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

