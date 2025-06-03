// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration extends $dara.Model {
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

