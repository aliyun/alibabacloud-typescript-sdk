// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySecretNoDetailResponseBodySecretNoInfoDTO } from "./QuerySecretNoDetailResponseBodySecretNoInfoDto";


export class QuerySecretNoDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 066E6E47-04CB-4774-A976-4F73CB76D4A3
   */
  requestId?: string;
  /**
   * @remarks
   * The attributes of the phone number.
   */
  secretNoInfoDTO?: QuerySecretNoDetailResponseBodySecretNoInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretNoInfoDTO: 'SecretNoInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretNoInfoDTO: QuerySecretNoDetailResponseBodySecretNoInfoDTO,
    };
  }

  validate() {
    if(this.secretNoInfoDTO && typeof (this.secretNoInfoDTO as any).validate === 'function') {
      (this.secretNoInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

