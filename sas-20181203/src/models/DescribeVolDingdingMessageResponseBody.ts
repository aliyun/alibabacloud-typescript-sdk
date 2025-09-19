// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVolDingdingMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The QR code address of the DingTalk group.
   * 
   * @example
   * https://www.wikihow.com/images_en/thumb/4/48/Get-the-URL-for-Pictures-Step-4-Version-4.jpg/v4-728px-Get-the-URL-for-Pictures-Step-4-Version-4.jpg.webp
   */
  dingdingUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A437E93-47EE-548F-ABCE-13F89AA85585
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dingdingUrl: 'DingdingUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingdingUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

