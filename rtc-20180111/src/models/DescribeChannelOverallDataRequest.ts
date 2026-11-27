// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * UNIX timestamp indicating the channel creation time. Supports querying data from the last 30 days. Expressed as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615893133
   */
  createdTs?: number;
  /**
   * @remarks
   * Channel release time, represented as a UNIX timestamp in seconds. If this parameter is empty, the current time is used.
   * > If the provided channel release time exceeds the actual release time, data from the Creation Time to the actual release time is returned.
   * 
   * @example
   * 1615893757
   */
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

