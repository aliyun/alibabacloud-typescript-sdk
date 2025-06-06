// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneNumberAnalysisResponseBodyData } from "./DescribePhoneNumberAnalysisResponseBodyData";


export class DescribePhoneNumberAnalysisResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DescribePhoneNumberAnalysisResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
      data: DescribePhoneNumberAnalysisResponseBodyData,
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

