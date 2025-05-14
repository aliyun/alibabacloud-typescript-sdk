// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveChannelRequestVideoSettingsVideoCodecSettingFramerate extends $dara.Model {
  /**
   * @remarks
   * The frame rate mode. Valid values: SPECIFIED (fixed frame rate) and FROM_SOURCE (use source specification).
   * 
   * @example
   * SPECIFIED
   */
  framerateControl?: string;
  /**
   * @remarks
   * The denominator of the fixed frame rate. The parameter is required when FramerateControl is set to SPECIFIED. Valid values: 1 to 60. The numerator must be divisible by the denominator.
   * 
   * @example
   * 1
   */
  framerateDenominator?: number;
  /**
   * @remarks
   * The numerator of the fixed frame rate. The parameter is required when FramerateControl is set to SPECIFIED. Valid values: 1 to 60. The numerator must be divisible by the denominator.
   * 
   * @example
   * 25
   */
  framerateNumerator?: number;
  static names(): { [key: string]: string } {
    return {
      framerateControl: 'FramerateControl',
      framerateDenominator: 'FramerateDenominator',
      framerateNumerator: 'FramerateNumerator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framerateControl: 'string',
      framerateDenominator: 'number',
      framerateNumerator: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

