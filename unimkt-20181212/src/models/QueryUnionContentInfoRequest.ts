// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnionContentInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      contentId: 'ContentId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      contentId: 'string',
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

