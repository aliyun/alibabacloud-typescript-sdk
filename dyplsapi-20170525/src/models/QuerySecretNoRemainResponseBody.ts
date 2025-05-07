// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySecretNoRemainResponseBodySecretRemainDTO } from "./QuerySecretNoRemainResponseBodySecretRemainDto";


export class QuerySecretNoRemainResponseBody extends $dara.Model {
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
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the operation was called.
   */
  secretRemainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretRemainDTO: 'SecretRemainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretRemainDTO: QuerySecretNoRemainResponseBodySecretRemainDTO,
    };
  }

  validate() {
    if(this.secretRemainDTO && typeof (this.secretRemainDTO as any).validate === 'function') {
      (this.secretRemainDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

