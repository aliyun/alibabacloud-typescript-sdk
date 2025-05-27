// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendDetailsResponseBodySmsSendDetailDTOs } from "./QuerySendDetailsResponseBodySmsSendDetailDtos";


export class QuerySendDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the message.
   */
  smsSendDetailDTOs?: QuerySendDetailsResponseBodySmsSendDetailDTOs;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      smsSendDetailDTOs: 'SmsSendDetailDTOs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      smsSendDetailDTOs: QuerySendDetailsResponseBodySmsSendDetailDTOs,
      totalCount: 'string',
    };
  }

  validate() {
    if(this.smsSendDetailDTOs && typeof (this.smsSendDetailDTOs as any).validate === 'function') {
      (this.smsSendDetailDTOs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

