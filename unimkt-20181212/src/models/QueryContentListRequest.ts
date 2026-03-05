// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentListRequest extends $dara.Model {
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
  proxyUserId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskBizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      brandUserId: 'BrandUserId',
      brandUserNick: 'BrandUserNick',
      channelId: 'ChannelId',
      proxyUserId: 'ProxyUserId',
      taskBizType: 'TaskBizType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandUserId: 'number',
      brandUserNick: 'string',
      channelId: 'string',
      proxyUserId: 'number',
      taskBizType: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

