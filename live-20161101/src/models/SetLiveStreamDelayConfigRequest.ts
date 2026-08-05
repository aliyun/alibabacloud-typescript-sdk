// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamDelayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The FLV playback latency. Unit: seconds.
   * 
   * > If this parameter is left empty, the latency is set based on the value of FlvLevel.
   * 
   * @example
   * 8
   */
  flvDelay?: number;
  /**
   * @remarks
   * The FLV latency level. This parameter is ignored if FlvDelay is set.
   * 
   * Valid values:
   * 
   * - **short** (default): 2 seconds.
   * 
   * - **medium**: 4 seconds.
   * 
   * - **long**: more than 4 seconds.
   * 
   * > If both FlvDelay and FlvLevel are left empty, the default value **short** is used.
   * 
   * @example
   * medium
   */
  flvLevel?: string;
  /**
   * @remarks
   * The HLS playback latency. Unit: seconds.
   * 
   * > If this parameter is left empty, the latency is set based on the value of HlsLevel.
   * 
   * @example
   * 4
   */
  hlsDelay?: number;
  /**
   * @remarks
   * The HLS latency level. This parameter is ignored if HlsDelay is set.
   * 
   * Valid values:
   * 
   * - **short** (default): 3 seconds.
   * 
   * - **medium**: 6 seconds.
   * 
   * - **long**: 15 seconds.
   * 
   * > If both HlsDelay and HlsLevel are left empty, the default value **short** is used.
   * 
   * @example
   * short
   */
  hlsLevel?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The RTMP playback latency. Unit: seconds.
   * 
   * > If this parameter is left empty, the latency is set based on the value of RtmpLevel.
   * 
   * @example
   * 4
   */
  rtmpDelay?: number;
  /**
   * @remarks
   * The RTMP latency level. This parameter is ignored if RtmpDelay is set.
   * 
   * Valid values:
   * 
   * - **short** (default): 2 seconds.
   * 
   * - **medium**: 4 seconds.
   * 
   * - **long**: more than 4 seconds.
   * 
   * > If both RtmpDelay and RtmpLevel are left empty, the default value **short** is used.
   * 
   * @example
   * short
   */
  rtmpLevel?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      flvDelay: 'FlvDelay',
      flvLevel: 'FlvLevel',
      hlsDelay: 'HlsDelay',
      hlsLevel: 'HlsLevel',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rtmpDelay: 'RtmpDelay',
      rtmpLevel: 'RtmpLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      flvDelay: 'number',
      flvLevel: 'string',
      hlsDelay: 'number',
      hlsLevel: 'string',
      ownerId: 'number',
      regionId: 'string',
      rtmpDelay: 'number',
      rtmpLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

