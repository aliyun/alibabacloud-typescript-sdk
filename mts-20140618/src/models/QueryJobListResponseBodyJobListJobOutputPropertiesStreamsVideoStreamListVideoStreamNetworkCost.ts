// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate.
   * 
   * @example
   * 300
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that was consumed.
   * 
   * @example
   * 10
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The amount of time consumed to preload the video stream.
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

