// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecureNetworkTypeRequest extends $dara.Model {
  secureNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureNetworkType: 'string',
      serialNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

