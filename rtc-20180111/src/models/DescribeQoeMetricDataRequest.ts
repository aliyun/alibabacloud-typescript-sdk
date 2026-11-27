// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQoeMetricDataRequest extends $dara.Model {
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
   * Channel Creation Time. Supports querying data from the last 30 days. Represented as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * Channel release time, represented as a UNIX timestamp in seconds. An empty parameter indicates retrieving data up to the current time.  
   * > If the provided channel release time exceeds the actual release time, data from the Creation Time to the actual release time will be returned.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

