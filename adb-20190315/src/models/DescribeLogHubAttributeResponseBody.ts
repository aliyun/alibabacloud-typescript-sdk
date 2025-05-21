// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogHubAttributeResponseBodyLoghubInfo } from "./DescribeLogHubAttributeResponseBodyLoghubInfo";


export class DescribeLogHubAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log collection information.
   */
  loghubInfo?: DescribeLogHubAttributeResponseBodyLoghubInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A564B7F-8C00-43C0-8EC5-919FBB70573
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
      loghubInfo: DescribeLogHubAttributeResponseBodyLoghubInfo,
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

