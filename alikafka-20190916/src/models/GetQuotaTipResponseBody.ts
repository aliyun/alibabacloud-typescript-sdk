// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQuotaTipResponseBodyQuotaData } from "./GetQuotaTipResponseBodyQuotaData";


export class GetQuotaTipResponseBody extends $dara.Model {
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
   * The additional message. This message is typically used to describe API call failures for troubleshooting.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The quota.
   */
  quotaData?: GetQuotaTipResponseBodyQuotaData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0178A3A7-E87B-5E50-A16F-3E62F534****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      quotaData: 'QuotaData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      quotaData: GetQuotaTipResponseBodyQuotaData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.quotaData && typeof (this.quotaData as any).validate === 'function') {
      (this.quotaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

