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
   * The latency of FLV-based playback. Unit: seconds.
   * 
   * >  If this parameter is left empty, the latency is set to a value corresponding to the FlvLevel parameter.
   * 
   * @example
   * 8
   */
  flvDelay?: number;
  /**
   * @remarks
   * The latency level of FLV-based playback. Ignore this parameter if the FlvDelay parameter is configured.
   * 
   * Valid values:
   * 
   * *   **short** (default): The latency is 4 seconds.
   * *   **medium**: The latency is 8 seconds.
   * *   **long**: The latency is 16 seconds.
   * 
   * >  If both the FlvDelay and FlvLevel parameters are left empty, FlvLevel is set to **short** by default.
   * 
   * @example
   * medium
   */
  flvLevel?: string;
  /**
   * @remarks
   * The latency of HLS-based playback. Unit: seconds.
   * 
   * >  If this parameter is left empty, the latency is set to a value corresponding to the HlsLevel parameter.
   * 
   * @example
   * 4
   */
  hlsDelay?: number;
  /**
   * @remarks
   * The latency level of HLS-based playback. Ignore this parameter if the HlsDelay parameter is configured.
   * 
   * Valid values:
   * 
   * *   **short**: The latency is 3 seconds. This is the default value.
   * *   **medium**: The latency is 6 seconds.
   * *   **long**: The latency is 15 seconds.
   * 
   * >  If both the HlsDelay and HlsLevel parameters are left empty, HlsLevel is set to **short** by default.
   * 
   * @example
   * short
   */
  hlsLevel?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The latency of RTMP-based playback. Unit: seconds.
   * 
   * >  If this parameter is left empty, the latency is set to a value corresponding to the RtmpLevel parameter.
   * 
   * @example
   * 4
   */
  rtmpDelay?: number;
  /**
   * @remarks
   * The latency level of RTMP-based playback. Ignore this parameter if the RtmpDelay parameter is configured.
   * 
   * Valid values:
   * 
   * *   **short** (default): The latency is 4 seconds.
   * *   **medium**: The latency is 8 seconds.
   * *   **long**: The latency is 16 seconds.
   * 
   * >  If both the RtmpDelay and RtmpLevel parameters are left empty, RtmpLevel is set to **short** by default.
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

