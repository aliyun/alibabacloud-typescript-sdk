// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSubListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom report.
   * 
   * @example
   * "data": [{"subId": 336,"reportId": [6,8],"createTime": "2021-07-05T06:18:46Z","domains": ["example.com"],"effectiveFrom": "2021-07-05T06:18:46Z","effectiveEnd": "2021-10-05T06:18:46Z","status": "enable"}]
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3250A51D-C11D-46BA-B6B3-95348EEDE652
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

