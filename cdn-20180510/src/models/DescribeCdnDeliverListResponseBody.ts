// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDeliverListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the tracking task.
   * 
   * @example
   * "data": [{"deliverId": 1,"status": "enable","createTime": "2020-10-14T11:19:26Z","crontab": "0 0 0 \\* \\* ?","frequency": "d","name": "The name of the tracking task","dmList": ["www.example.com"],"reports": [{"reportId": 1,"conditions": [{"op": "in","field": "prov","value": ["Heilongjiang","Beijing"]}} },{"reportId": 2}],"deliver": {"email": {"subject": "subject","to": ["example@alibaba-inc.com","example@alibaba-inc.com"]}}}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12345
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

