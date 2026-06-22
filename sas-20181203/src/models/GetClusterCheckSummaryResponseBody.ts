// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of check items that failed the check.
   * 
   * @example
   * 6
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of check items with a high-risk level that failed the check.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of check items with a low-risk level that failed the check.
   * 
   * @example
   * 3
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of check items with a medium-risk level that failed the check.
   * 
   * @example
   * 2
   */
  notPassMediumCount?: number;
  static names(): { [key: string]: string } {
    return {
      notPassCount: 'NotPassCount',
      notPassHighCount: 'NotPassHighCount',
      notPassLowCount: 'NotPassLowCount',
      notPassMediumCount: 'NotPassMediumCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notPassCount: 'number',
      notPassHighCount: 'number',
      notPassLowCount: 'number',
      notPassMediumCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCheckSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetClusterCheckSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
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
      data: GetClusterCheckSummaryResponseBodyData,
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

