// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @example
   * 100365548
   */
  connectionId?: string;
  /**
   * @example
   * 16128694810
   */
  endTime?: number;
  /**
   * @example
   * 16128694110
   */
  startTime?: number;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      connectionId: 'ConnectionId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      connectionId: 'string',
      endTime: 'number',
      startTime: 'number',
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

