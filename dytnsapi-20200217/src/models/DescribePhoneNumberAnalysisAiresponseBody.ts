// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneNumberAnalysisAIResponseBodyData } from "./DescribePhoneNumberAnalysisAiresponseBodyData";


export class DescribePhoneNumberAnalysisAIResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   OK: The request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneNumberAnalysisAIResponseBodyData;
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
   * 68A40250-50CD-034C-B728-0BD******177
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribePhoneNumberAnalysisAIResponseBodyData,
      message: 'string',
      requestId: 'string',
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

