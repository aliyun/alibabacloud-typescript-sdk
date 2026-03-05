// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnionTaskInfoRequest extends $dara.Model {
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
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      proxyUserId: 'ProxyUserId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      proxyUserId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

