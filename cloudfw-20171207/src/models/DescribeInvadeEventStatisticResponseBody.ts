// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of open high-risk vulnerabilities.
   * 
   * @example
   * 1
   */
  highOpenEventCnt?: number;
  /**
   * @remarks
   * The number of open low-risk vulnerabilities.
   * 
   * @example
   * 1
   */
  lowOpenEventCnt?: number;
  /**
   * @remarks
   * The number of open medium-risk vulnerabilities.
   * 
   * @example
   * 0
   */
  middleOpenEventCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1530A01A-6901-5B72-AB88-28B6E96B****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of open vulnerabilities.
   * 
   * @example
   * 2
   */
  totalOpenEventCnt?: number;
  static names(): { [key: string]: string } {
    return {
      highOpenEventCnt: 'HighOpenEventCnt',
      lowOpenEventCnt: 'LowOpenEventCnt',
      middleOpenEventCnt: 'MiddleOpenEventCnt',
      requestId: 'RequestId',
      totalOpenEventCnt: 'TotalOpenEventCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highOpenEventCnt: 'number',
      lowOpenEventCnt: 'number',
      middleOpenEventCnt: 'number',
      requestId: 'string',
      totalOpenEventCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

