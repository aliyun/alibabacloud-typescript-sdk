// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the channel was created. You can query data of the last 30 days. The time is a UNIX timestamp in seconds.
   * > The channel creation time must be exactly the same as the actual creation time (accurate to the second). You can call the [DescribeCallList](https://help.aliyun.com/document_detail/2655884.html) operation to view the channel creation time (the CreatedTS parameter in the response).
   * 
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the channel was released. The time is a UNIX timestamp in seconds. If this parameter is left empty, the current time is used.
   * > If the specified channel release time is later than the actual release time, the data from the creation time to the actual release time is returned.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The extended data type to query. Valid values:
   * - USER_DURATION_STAT: user duration statistics.
   * 
   * @example
   * USER_DURATION_STAT
   */
  extDataType?: string;
  /**
   * @remarks
   * Specifies whether to query the communication experience information. Default value: true.
   * 
   * @example
   * false
   */
  queryExpInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      extDataType: 'ExtDataType',
      queryExpInfo: 'QueryExpInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      extDataType: 'string',
      queryExpInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

