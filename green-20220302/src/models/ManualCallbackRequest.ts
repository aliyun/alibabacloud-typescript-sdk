// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * Channel field
   * 
   * @example
   * ant
   */
  channel?: string;
  /**
   * @remarks
   * Checksum.
   * 
   * @example
   * abc
   */
  checksum?: string;
  /**
   * @remarks
   * Code value
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * {\\"Result\\": [{\\"Confidence\\": 100.0, \\"CustomizedHit\\": [{\\"KeyWords\\": u\\"\\u4fdd\\u969c,\\u6700\\u5927,\\u9ad8\\u7ea7\\", \\"LibName\\": u\\"\\u4f18\\u8def\\u654f\\u611f\\u8bcd\\"}], \\"Label\\": \\"customized\\"}]}
   */
  data?: string;
  /**
   * @remarks
   * Message information
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Platform request ID, used for troubleshooting assistance
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      checksum: 'Checksum',
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      checksum: 'string',
      code: 'string',
      data: 'string',
      msg: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

