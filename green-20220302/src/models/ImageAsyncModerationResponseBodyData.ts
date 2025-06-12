// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API. You can use this field to query the detection results.
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

