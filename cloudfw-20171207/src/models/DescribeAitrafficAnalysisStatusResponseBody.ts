// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAITrafficAnalysisStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 4E7F94C7-781F-5192-86CF-DB085****
   */
  requestId?: string;
  /**
   * @example
   * open
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

