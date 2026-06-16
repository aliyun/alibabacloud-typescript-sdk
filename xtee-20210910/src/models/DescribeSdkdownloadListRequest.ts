// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDKDownloadListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * ANDROID
   */
  deviceType?: string;
  /**
   * @remarks
   * The download type.
   * 
   * @example
   * OLD
   */
  listType?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      deviceType: 'deviceType',
      listType: 'listType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      deviceType: 'string',
      listType: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

