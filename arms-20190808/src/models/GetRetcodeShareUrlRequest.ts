// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeShareUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The project ID (PID) of the application.
   * 
   * To obtain the application PID, log on to the Application Real-Time Monitoring Service (ARMS) console. In the left-side navigation pane, choose **Browser Monitoring**>**Browser Monitoring**. Then, click the name of the application. The URL in the address bar contains the application PID, in the xxx format. As the browser is encoded, you must modify the PID. For example, if the PID in the URL is xxx%4074xxx, you must replace %40 with an at sign (@) to obtain xxx@74xxx.
   * 
   * This parameter is required.
   * 
   * @example
   * iioe7jcnuk@582846f37******
   */
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

