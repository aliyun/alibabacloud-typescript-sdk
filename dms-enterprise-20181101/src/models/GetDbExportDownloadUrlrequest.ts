// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbExportDownloadURLRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 73****
   */
  orderId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

