// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvServiceMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether targets are matched.
   * 
   * @example
   * Match successful.
   */
  matchedMsg?: string;
  /**
   * @remarks
   * The number of matched targets.
   * 
   * @example
   * 1
   */
  matchedTargetCount?: string;
  static names(): { [key: string]: string } {
    return {
      matchedMsg: 'MatchedMsg',
      matchedTargetCount: 'MatchedTargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedMsg: 'string',
      matchedTargetCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvServiceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: UpdateEnvServiceMonitorResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A474FF8-7861-4D00-81B5-5BC3DA4E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateEnvServiceMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

