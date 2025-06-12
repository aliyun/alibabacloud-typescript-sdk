// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UrlAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
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

