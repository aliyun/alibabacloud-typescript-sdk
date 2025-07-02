// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyDataPeripheralConfig extends $dara.Model {
  defaultPolicy?: number;
  policyStrategy?: number;
  usbAndInternalCamera?: number;
  usbPrinter?: number;
  usbStorage?: number;
  static names(): { [key: string]: string } {
    return {
      defaultPolicy: 'DefaultPolicy',
      policyStrategy: 'PolicyStrategy',
      usbAndInternalCamera: 'UsbAndInternalCamera',
      usbPrinter: 'UsbPrinter',
      usbStorage: 'UsbStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicy: 'number',
      policyStrategy: 'number',
      usbAndInternalCamera: 'number',
      usbPrinter: 'number',
      usbStorage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

