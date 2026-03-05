// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUnionBrandRequest extends $dara.Model {
  /**
   * @example
   * 167332546421354
   */
  brandMainId?: number;
  /**
   * @example
   * QD-WXXJ-403576
   */
  channelId?: string;
  /**
   * @example
   * 167332546421354
   */
  proxyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      brandMainId: 'BrandMainId',
      channelId: 'ChannelId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandMainId: 'number',
      channelId: 'string',
      proxyUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

