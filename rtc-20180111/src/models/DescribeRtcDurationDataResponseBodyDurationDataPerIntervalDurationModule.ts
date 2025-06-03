// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule extends $dara.Model {
  /**
   * @example
   * 200
   */
  audioDuration?: number;
  /**
   * @example
   * 200
   */
  contentDuration?: number;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 1000
   */
  totalDuration?: number;
  /**
   * @example
   * 300
   */
  v1080Duration?: number;
  /**
   * @example
   * 300
   */
  v360Duration?: number;
  /**
   * @example
   * 200
   */
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      contentDuration: 'ContentDuration',
      timeStamp: 'TimeStamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v360Duration: 'V360Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      contentDuration: 'number',
      timeStamp: 'string',
      totalDuration: 'number',
      v1080Duration: 'number',
      v360Duration: 'number',
      v720Duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

