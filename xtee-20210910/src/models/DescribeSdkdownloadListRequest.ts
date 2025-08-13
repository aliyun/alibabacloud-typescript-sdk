// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDKDownloadListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Device type.
   * 
   * @example
   * ANDROID
   */
  deviceType?: string;
  /**
   * @remarks
   * Download type
   * 
   * @example
   * OLD
   */
  listType?: string;
  /**
   * @remarks
   * Region code
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

