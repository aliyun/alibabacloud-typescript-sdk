// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordingFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * App ID.
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
   * The query range specifies the start time of the recording task. It is defined as a closed interval and measured in milliseconds (ms).
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
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query range start time (open interval) for recording tasks, in milliseconds. If not specified, defaults to the past 3 days. You can query recordings up to one year old.
   * 
   * @example
   * 1712376032000
   */
  startTs?: number;
  /**
   * @remarks
   * List of recording task IDs.
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

