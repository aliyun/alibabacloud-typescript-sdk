// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageResultExtRequest extends $dara.Model {
  /**
   * @remarks
   * The type of information to obtain. Multiple values are separated by commas. Valid values:
   * 
   * - customImage: custom image library hit information
   * 
   * - textInImage: text information in the image
   * 
   * @example
   * customImage,textInImage
   */
  infoType?: string;
  /**
   * @remarks
   * The requestId field returned by the enhanced image moderation API
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

