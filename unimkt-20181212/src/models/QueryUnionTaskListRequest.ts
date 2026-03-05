// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnionTaskListRequest extends $dara.Model {
  brandUserId?: number;
  brandUserNick?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      brandUserId: 'BrandUserId',
      brandUserNick: 'BrandUserNick',
      channelId: 'ChannelId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandUserId: 'number',
      brandUserNick: 'string',
      channelId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
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

