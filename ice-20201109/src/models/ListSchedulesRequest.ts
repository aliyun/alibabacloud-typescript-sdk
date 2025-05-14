// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The time window of the program schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 14400
   */
  windowDurationSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      windowDurationSeconds: 'WindowDurationSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      windowDurationSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

