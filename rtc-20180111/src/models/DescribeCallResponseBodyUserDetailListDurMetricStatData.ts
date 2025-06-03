// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $dara.Model {
  /**
   * @example
   * 0
   */
  pubAudio?: number;
  /**
   * @example
   * 0
   */
  pubVideo1080?: number;
  /**
   * @example
   * 0
   */
  pubVideo360?: number;
  /**
   * @example
   * 0
   */
  pubVideo720?: number;
  /**
   * @example
   * 0
   */
  pubVideoScreenShare?: number;
  /**
   * @example
   * 0
   */
  subAudio?: number;
  /**
   * @example
   * 0
   */
  subVideo1080?: number;
  /**
   * @example
   * 0
   */
  subVideo360?: number;
  /**
   * @example
   * 0
   */
  subVideo720?: number;
  /**
   * @example
   * 0
   */
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

