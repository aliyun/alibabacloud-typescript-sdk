// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySubscriptionDetailResponseBodySecretBindDetailDTO } from "./QuerySubscriptionDetailResponseBodySecretBindDetailDto";


export class QuerySubscriptionDetailResponseBody extends $dara.Model {
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
   * The information returned after the QuerySubscriptionDetail operation was called.
   */
  secretBindDetailDTO?: QuerySubscriptionDetailResponseBodySecretBindDetailDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDetailDTO: 'SecretBindDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDetailDTO: QuerySubscriptionDetailResponseBodySecretBindDetailDTO,
    };
  }

  validate() {
    if(this.secretBindDetailDTO && typeof (this.secretBindDetailDTO as any).validate === 'function') {
      (this.secretBindDetailDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

