// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @remarks
   * The name of the scheme.
   * 
   * @example
   * 消息通知1
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The moderation result.
   * 
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://console.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      name: 'Name',
      regionId: 'RegionId',
      scope: 'Scope',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      name: 'string',
      regionId: 'string',
      scope: 'string',
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

