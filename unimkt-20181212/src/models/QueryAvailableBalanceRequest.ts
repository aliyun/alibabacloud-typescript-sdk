// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvailableBalanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  proxyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

