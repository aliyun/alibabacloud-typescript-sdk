// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceivedMsgMsgContent extends $dara.Model {
  msgData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      msgData: 'msg_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.msgData) {
      $dara.Model.validateMap(this.msgData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReceivedMsg extends $dara.Model {
  /**
   * @example
   * false
   */
  hasRead?: boolean;
  /**
   * @example
   * system
   */
  msgCategory?: string;
  msgContent?: ReceivedMsgMsgContent;
  /**
   * @example
   * 50d6f2aaa16525c7d053998e48fac265962f585f
   */
  msgId?: string;
  /**
   * @example
   * change_user_setting
   */
  msgSubCategory?: string;
  /**
   * @example
   * edit_user
   */
  msgType?: string;
  /**
   * @example
   * 1716363191123
   */
  publishAt?: number;
  /**
   * @example
   * 1716363191123
   */
  readAt?: number;
  static names(): { [key: string]: string } {
    return {
      hasRead: 'has_read',
      msgCategory: 'msg_category',
      msgContent: 'msg_content',
      msgId: 'msg_id',
      msgSubCategory: 'msg_sub_category',
      msgType: 'msg_type',
      publishAt: 'publish_at',
      readAt: 'read_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRead: 'boolean',
      msgCategory: 'string',
      msgContent: ReceivedMsgMsgContent,
      msgId: 'string',
      msgSubCategory: 'string',
      msgType: 'string',
      publishAt: 'number',
      readAt: 'number',
    };
  }

  validate() {
    if(this.msgContent && typeof (this.msgContent as any).validate === 'function') {
      (this.msgContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

