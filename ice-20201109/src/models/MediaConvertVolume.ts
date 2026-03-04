// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertVolume extends $dara.Model {
  /**
   * @remarks
   * The output volume.
   * 
   * *   This parameter takes effect only if Method is set to dynamic.
   * *   Unit: dB.
   * *   Valid values: [-70,-5].
   * *   Default value: -6.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: number;
  /**
   * @remarks
   * The amount of gain to apply, relative to the input audio.
   * 
   * *   This parameter takes effect only if Method is set to linear.
   * *   Unit: dB.
   * *   Valid values: less than or equal to 20.
   * *   Default value: -20.
   * 
   * @example
   * -20
   */
  level?: number;
  /**
   * @remarks
   * The target loudness range.
   * 
   * *   This parameter takes effect only if Method is set to dynamic.
   * *   Unit: dB.
   * *   Valid values: [1,20].
   * *   Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: number;
  /**
   * @remarks
   * The volume adjustment method. Valid values:
   * 
   * *   auto
   * *   dynamic
   * *   linear
   * *   Default value: dynamic.
   * 
   * <!---->
   * 
   * *
   * *
   * *
   * *
   * 
   * @example
   * linear
   */
  method?: string;
  /**
   * @remarks
   * The maximum volume.
   * 
   * *   This parameter takes effect only if Method is set to dynamic.
   * *   Unit: dB.
   * *   Valid values: [-9,0].
   * *   Default value: -1.
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

