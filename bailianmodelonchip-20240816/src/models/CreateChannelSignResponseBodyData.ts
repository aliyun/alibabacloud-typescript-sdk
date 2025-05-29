// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateChannelSignResponseBodyData extends $dara.Model {
  channelName?: string;
  contact?: string;
  /**
   * @example
   * 2024-11-25 08:00:00
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 2024-11-25 08:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 13555555555
   */
  phone?: string;
  remark?: string;
  /**
   * @example
   * review
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'channelName',
      contact: 'contact',
      createTime: 'createTime',
      description: 'description',
      modifyTime: 'modifyTime',
      phone: 'phone',
      remark: 'remark',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      contact: 'string',
      createTime: 'string',
      description: 'string',
      modifyTime: 'string',
      phone: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

