// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScreenScoreThreadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The trends of the scores on the security dashboard.
   */
  socreThread?: string[];
  /**
   * @remarks
   * The dates of the scores on the security dashboard.
   */
  socreThreadDate?: string[];
  static names(): { [key: string]: string } {
    return {
      socreThread: 'SocreThread',
      socreThreadDate: 'SocreThreadDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      socreThread: { 'type': 'array', 'itemType': 'string' },
      socreThreadDate: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.socreThread)) {
      $dara.Model.validateArray(this.socreThread);
    }
    if(Array.isArray(this.socreThreadDate)) {
      $dara.Model.validateArray(this.socreThreadDate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenScoreThreadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeScreenScoreThreadResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScreenScoreThreadResponseBodyData,
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

