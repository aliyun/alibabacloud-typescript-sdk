// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChannelSignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelName?: string;
  contact?: string;
  description?: string;
  /**
   * @example
   * 13555555555
   */
  phone?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'channelName',
      contact: 'contact',
      description: 'description',
      phone: 'phone',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      contact: 'string',
      description: 'string',
      phone: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

