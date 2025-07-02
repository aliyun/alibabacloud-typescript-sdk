// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceFromSNRequest extends $dara.Model {
  alias?: string;
  customProperty?: string;
  groupId?: string;
  labelContents?: string;
  secureNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      customProperty: 'CustomProperty',
      groupId: 'GroupId',
      labelContents: 'LabelContents',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      customProperty: 'string',
      groupId: 'string',
      labelContents: 'string',
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

