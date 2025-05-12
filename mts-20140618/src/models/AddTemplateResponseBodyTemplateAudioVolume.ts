// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplateAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The output volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [-70,-5].
   * 
   * Default value: -6.
   * 
   * @example
   * -6
   */
  integratedLoudnessTarget?: string;
  /**
   * @remarks
   * The volume adjustment range.
   * 
   * *   Default value: **-20**.
   * *   Unit: dB.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The range of the volume relative to the output volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [1,20].
   * 
   * Default value: 8.
   * 
   * @example
   * 8
   */
  loudnessRangeTarget?: string;
  /**
   * @remarks
   * The volume adjustment method. Valid values:
   * 
   * *   **auto**: The volume is automatically adjusted.
   * *   **dynamic**: The volume is dynamically adjusted.
   * *   **linear**: The volume is linearly adjusted.
   * 
   * @example
   * auto
   */
  method?: string;
  /**
   * @remarks
   * The volume adjustment coefficient.
   * 
   * This parameter takes effect only when the value of Method is adaptive.
   * 
   * Valid values: [0,1].
   * 
   * Default value: 0.9.
   * 
   * @example
   * 0.9
   */
  peakLevel?: string;
  /**
   * @remarks
   * The peak volume.
   * 
   * This parameter takes effect only when the value of Method is dynamic.
   * 
   * Unit: dB.
   * 
   * Valid values: [-9,0].
   * 
   * Default value: -1.
   * 
   * @example
   * 0
   */
  truePeak?: string;
  static names(): { [key: string]: string } {
    return {
      integratedLoudnessTarget: 'IntegratedLoudnessTarget',
      level: 'Level',
      loudnessRangeTarget: 'LoudnessRangeTarget',
      method: 'Method',
      peakLevel: 'PeakLevel',
      truePeak: 'TruePeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedLoudnessTarget: 'string',
      level: 'string',
      loudnessRangeTarget: 'string',
      method: 'string',
      peakLevel: 'string',
      truePeak: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

