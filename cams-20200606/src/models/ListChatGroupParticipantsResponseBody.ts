// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChatGroupParticipantsResponseBodyData } from "./ListChatGroupParticipantsResponseBodyData";


export class ListChatGroupParticipantsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListChatGroupParticipantsResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * E9d9****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListChatGroupParticipantsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

