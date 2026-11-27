// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudNotesShrinkRequest extends $dara.Model {
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
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * Query range, closed interval of job start time, in milliseconds.
   * 
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query range, open interval of job start time, in milliseconds. If not specified, defaults to querying recordings from the last 3 days, with a maximum range of one year in the past.
   * 
   * @example
   * 1712376032000
   */
  startTs?: number;
  /**
   * @remarks
   * List of job TaskIds.
   */
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

