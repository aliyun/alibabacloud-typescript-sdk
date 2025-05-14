// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingRate extends $dara.Model {
  /**
   * @remarks
   * The video bitrate. Unit: bit/s. If you set it to 0 or leave it empty, the source specification is used. Valid values: 50000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 2500000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video buffer size. Unit: bit/s. Valid values: 100000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 6000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The maximum bitrate. Unit: bit/s. Valid values: 100000 to 6000000. The value must be divisible by 1000.
   * 
   * @example
   * 6000000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The bitrate control mode. Valid values: CBR, ABR, and VBR.
   * 
   * @example
   * ABR
   */
  rateControlMode?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bufferSize: 'BufferSize',
      maxBitrate: 'MaxBitrate',
      rateControlMode: 'RateControlMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bufferSize: 'number',
      maxBitrate: 'number',
      rateControlMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

