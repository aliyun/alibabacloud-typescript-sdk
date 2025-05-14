// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveWatchDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 84600
   */
  avgWatchTime?: number;
  /**
   * @example
   * 100
   */
  liveUv?: number;
  /**
   * @example
   * 10000
   */
  msgCount?: number;
  /**
   * @example
   * 20
   */
  playbackUv?: number;
  /**
   * @example
   * 30
   */
  praiseCount?: number;
  /**
   * @example
   * 1000
   */
  pv?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 1222000
   */
  totalWatchTime?: number;
  /**
   * @example
   * 10
   */
  uv?: number;
  static names(): { [key: string]: string } {
    return {
      avgWatchTime: 'avgWatchTime',
      liveUv: 'liveUv',
      msgCount: 'msgCount',
      playbackUv: 'playbackUv',
      praiseCount: 'praiseCount',
      pv: 'pv',
      requestId: 'requestId',
      totalWatchTime: 'totalWatchTime',
      uv: 'uv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgWatchTime: 'number',
      liveUv: 'number',
      msgCount: 'number',
      playbackUv: 'number',
      praiseCount: 'number',
      pv: 'number',
      requestId: 'string',
      totalWatchTime: 'number',
      uv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

