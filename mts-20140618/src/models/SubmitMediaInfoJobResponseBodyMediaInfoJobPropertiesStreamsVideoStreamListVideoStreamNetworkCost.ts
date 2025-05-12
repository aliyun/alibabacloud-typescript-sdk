// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate. Unit: Kbit/s.
   * 
   * @example
   * 300.34
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that is consumed.
   * 
   * @example
   * 10
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The time consumed to preload the video.
   * 
   * @example
   * 8
   */
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

