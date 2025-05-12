// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenterPolicyRequestUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   */
  description?: string;
  /**
   * @remarks
   * The product ID (PID).
   * 
   * @example
   * 08**
   */
  productId?: string;
  /**
   * @remarks
   * Specifies whether to allow USB redirection.
   * 
   * Valid values:
   * 
   * *   1: allows USB redirection.
   * *   2: forbids USB redirection.
   * 
   * @example
   * 1
   */
  usbRedirectType?: string;
  /**
   * @remarks
   * The type of the USB redirection rule.
   * 
   * Valid values:
   * 
   * *   2: enables USB redirection based on products.
   * 
   * @example
   * 2
   */
  usbRuleType?: string;
  /**
   * @remarks
   * The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).
   * 
   * @example
   * 04**
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productId: 'string',
      usbRedirectType: 'string',
      usbRuleType: 'string',
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

