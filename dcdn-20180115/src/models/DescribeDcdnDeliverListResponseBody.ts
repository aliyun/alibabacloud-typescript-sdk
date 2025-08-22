// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDeliverListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the tracking task.
   * 
   * @example
   * "data": [{"deliverId": 1,"status": "enable","createTime": "2021-06-14T11:19:26Z","crontab": "0 0 0 \\* \\* ?","frequency": "d","name": "Domain name report","dmList": ["www.example.com"],"reports": [{"reportId": 1,"conditions": [{"op": "in","field": "prov","value": ["Heilongjiang","Beijing"]}]},{"reportId": 2}],"deliver": {"email": {"subject": "subject","to": ["username@example.com","username@example.org"],"copy":["username@example.com","username@example.org"]}}}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

