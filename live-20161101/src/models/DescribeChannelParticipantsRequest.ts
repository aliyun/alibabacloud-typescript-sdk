// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelParticipantsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can specify only one application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel. You can specify only one channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   **asc**: ascending order.
   * *   **desc**: descending order. This is the default value.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

