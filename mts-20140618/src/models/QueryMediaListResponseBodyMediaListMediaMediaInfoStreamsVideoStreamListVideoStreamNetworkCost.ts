// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate.
   * 
   * @example
   * 2659.326
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that was consumed.
   * 
   * @example
   * 100
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The amount of preload time.
   * 
   * @example
   * 0.01
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

