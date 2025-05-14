// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVodPackagingConfigurationRequestPackageConfigStreamSelection extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate of the video stream. Unit: bit/s.
   * 
   * @example
   * 1000000000
   */
  maxVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The minimum bitrate of the video stream. Unit: bit/s.
   * 
   * @example
   * 100000
   */
  minVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The order of manifest files in the master playlist. Valid values:
   * 
   * *   ORIGINAL: sorts the manifest files in the same order as the source.
   * *   VIDEO_BITRATE_ASCENDING: sorts the manifest files in ascending order of bitrates, from lowest to highest.
   * *   VIDEO_BITRATE_DESCENDING: sorts the manifest files in descending order of bitrates, from highest to lowest.
   * 
   * @example
   * ORIGINAL
   */
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxVideoBitsPerSecond: 'MaxVideoBitsPerSecond',
      minVideoBitsPerSecond: 'MinVideoBitsPerSecond',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxVideoBitsPerSecond: 'number',
      minVideoBitsPerSecond: 'number',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

