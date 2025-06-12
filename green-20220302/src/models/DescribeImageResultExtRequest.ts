// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageResultExtRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the information to be obtained. Multiple values are separated by commas.
   * 
   * @example
   * customImage,textInImage
   */
  infoType?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * 638EDDC65C82AB39319A9F60
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
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

