// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSubListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom report task.
   * 
   * @example
   * {"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"Successful","Content":{"data":[{"subId":5,"reportId":[1,2,3],"createTime":"2020-09-25T09:39:33Z","domains"["www.example.com","www.example.com"],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}]}}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
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

