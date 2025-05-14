// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingGop extends $dara.Model {
  /**
   * @remarks
   * The number of B frames. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  bframesNum?: number;
  /**
   * @remarks
   * The GOP size. When GopSizeUnits is set to SECONDS, the value range is from 1 to 20. When GopSizeUnits is set to FRAMES, the value range is from 1 to 3000.
   * 
   * @example
   * 90
   */
  gopSize?: number;
  /**
   * @remarks
   * The GOP size unit. Valid values: FRAMES and SECONDS.
   * 
   * @example
   * FRAMES
   */
  gopSizeUnits?: string;
  static names(): { [key: string]: string } {
    return {
      bframesNum: 'BframesNum',
      gopSize: 'GopSize',
      gopSizeUnits: 'GopSizeUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bframesNum: 'number',
      gopSize: 'number',
      gopSizeUnits: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

