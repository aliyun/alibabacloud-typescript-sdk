// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFilesResponseBodyRecordFiles extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 2020-10-02T17:36:00Z
   */
  createTime?: string;
  /**
   * @example
   * 1800
   */
  duration?: number;
  /**
   * @example
   * 2020-11-01T17:36:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2020-11-02T17:36:00Z
   */
  stopTime?: string;
  /**
   * @example
   * yourTaskId
   */
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      duration: 'Duration',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createTime: 'string',
      duration: 'number',
      startTime: 'string',
      stopTime: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

