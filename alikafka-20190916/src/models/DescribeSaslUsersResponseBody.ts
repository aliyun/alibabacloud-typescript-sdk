// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSaslUsersResponseBodySaslUserList } from "./DescribeSaslUsersResponseBodySaslUserList";


export class DescribeSaslUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E3B3592-5994-4F65-A61E-E62A77A****
   */
  requestId?: string;
  /**
   * @remarks
   * The Simple Authentication and Security Layer (SASL) users.
   */
  saslUserList?: DescribeSaslUsersResponseBodySaslUserList;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      saslUserList: 'SaslUserList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      saslUserList: DescribeSaslUsersResponseBodySaslUserList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.saslUserList && typeof (this.saslUserList as any).validate === 'function') {
      (this.saslUserList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

