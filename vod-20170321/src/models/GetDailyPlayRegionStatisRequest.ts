// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyPlayRegionStatisRequest extends $dara.Model {
  /**
   * @remarks
   * The playback date, in days. Format: yyyy-MM-dd.
   * 
   * > 
   * > - Only daily queries are supported.
   * > - Only data within the past year can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03-20
   */
  date?: string;
  /**
   * @remarks
   * The media asset region ID. Specify this parameter to perform a filtered query for the playback data of all audio and video files in a specified service region. Valid values:
   * 
   * - cn-beijing: China (Beijing)
   * - cn-shanghai: China (Shanghai)
   * - cn-shenzhen: China (Shenzhen)
   * - ap-northeast-1: Japan (Tokyo)
   * - ap-southeast-1: Singapore
   * - ap-southeast-5: Indonesia (Jakarta)
   * - eu-central-1: Germany (Frankfurt)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  mediaRegion?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      mediaRegion: 'MediaRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      mediaRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

