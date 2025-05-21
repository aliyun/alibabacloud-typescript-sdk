// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoghubDetailResponseBodyLoghubInfo } from "./DescribeLoghubDetailResponseBodyLoghubInfo";


export class DescribeLoghubDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried log collection information.
   */
  loghubInfo?: DescribeLoghubDetailResponseBodyLoghubInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loghubInfo: 'LoghubInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loghubInfo: DescribeLoghubDetailResponseBodyLoghubInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loghubInfo && typeof (this.loghubInfo as any).validate === 'function') {
      (this.loghubInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

