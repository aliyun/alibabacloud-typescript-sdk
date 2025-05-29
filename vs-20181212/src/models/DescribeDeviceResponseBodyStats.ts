// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceResponseBodyStats extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelNum?: number;
  /**
   * @example
   * 1
   */
  failedNum?: number;
  /**
   * @example
   * 1
   */
  offlineNum?: number;
  /**
   * @example
   * 1
   */
  onlineNum?: number;
  /**
   * @example
   * 1
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      failedNum: 'FailedNum',
      offlineNum: 'OfflineNum',
      onlineNum: 'OnlineNum',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      failedNum: 'number',
      offlineNum: 'number',
      onlineNum: 'number',
      streamNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

