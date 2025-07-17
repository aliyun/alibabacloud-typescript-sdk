// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeShareUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01FF8DD9-A09C-47A1-895A-B6E321******
   */
  requestId?: string;
  /**
   * @remarks
   * The share URL of the application monitored by Browser Monitoring.
   * 
   * @example
   * http://arms-daily.console.aliyun.com:8080/shareapi/retcode.json?login_arms_t3h_token=XXXxxx&action=RetcodeAction&eventSubmitDoGetData=1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

