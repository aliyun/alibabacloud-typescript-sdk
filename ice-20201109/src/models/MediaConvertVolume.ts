// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertVolume extends $dara.Model {
  /**
   * @remarks
   * The target volume.
   * - This parameter takes effect only when Method is set to dynamic.
   * - Unit: dB.
   * - Value range: -70 to -5.
   * - Default value: -6.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: number;
  /**
   * @remarks
   * The volume increase relative to the input audio.
   * - This parameter takes effect only when Method is set to linear.
   * - Unit: dB.
   * - Value range: up to 20 dB.
   * - Default value: -20 dB.
   * 
   * @example
   * -20
   */
  level?: number;
  /**
   * @remarks
   * The fluctuation range relative to the target volume.
   * - This parameter takes effect only when Method is set to dynamic.
   * - Unit: dB.
   * - Value range: 1 to 20.
   * - Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: number;
  /**
   * @remarks
   * The volume adjustment method.
   * - auto: Automatic adjustment.
   * - dynamic: Dynamic adjustment.
   * - linear: Linear adjustment.
   * - Default value: dynamic.
   * 
   * @example
   * dynamic
   */
  method?: string;
  /**
   * @remarks
   * The peak volume.
   * - This parameter takes effect only when Method is set to dynamic.
   * - Unit: dB.
   * - Value range: -9 to 0.
   * - Default value: -1.
   * 
   * @example
   * -1
   */
  truePeak?: number;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'number',
      level: 'number',
      loudnessRangeTarget: 'number',
      method: 'string',
      truePeak: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

