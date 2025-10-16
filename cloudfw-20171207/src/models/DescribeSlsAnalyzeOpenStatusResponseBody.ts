// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsAnalyzeOpenStatusResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  openStatus?: string;
  /**
   * @example
   * 6CC01A2B-92FB-535C-9415-9A951C20****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

