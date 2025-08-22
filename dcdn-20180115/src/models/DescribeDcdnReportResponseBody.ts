// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the operations report.
   * 
   * @example
   * "data":[{"deliver":{ "report":{"title":"TopUrlByAcc","format":"table","sape":"","header":["url","traf","traf_rate","acc","acc_rate"]}}, "data":[{"acc":440,"acc_rate":"0.200%","traf":22,"url":"http://example.com","traf_rate":"0.100%"},{"acc":440,"acc_rate":"0.200%","traf":22,"url":"http://example.org","traf_rate":"0.100%"}]}]
   */
  content?: { [key: string]: any };
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
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

