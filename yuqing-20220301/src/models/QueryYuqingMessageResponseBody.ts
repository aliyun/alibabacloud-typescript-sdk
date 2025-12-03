// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { YuqingMessage } from "./YuqingMessage";


export class QueryYuqingMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * adacae47-6fc0-45c6-897c-26201aefbdfd
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  yuqingMessages?: YuqingMessage[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      totalCount: 'totalCount',
      yuqingMessages: 'yuqingMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      yuqingMessages: { 'type': 'array', 'itemType': YuqingMessage },
    };
  }

  validate() {
    if(Array.isArray(this.yuqingMessages)) {
      $dara.Model.validateArray(this.yuqingMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

