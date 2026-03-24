// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentContactStruct extends $dara.Model {
  /**
   * @remarks
   * 通道列表
   */
  channel?: string[];
  /**
   * @remarks
   * 联系人id
   * 
   * @example
   * 627415
   */
  contactId?: string;
  /**
   * @remarks
   * 联系类型。
   * 
   * @example
   * GROUP
   */
  contactType?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      contactId: 'contactId',
      contactType: 'contactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
      contactId: 'string',
      contactType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

