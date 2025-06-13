// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallbackRequest extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
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

