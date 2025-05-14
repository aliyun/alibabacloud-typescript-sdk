// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertVolume extends $dara.Model {
  integratedLoudnessTarget?: number;
  level?: number;
  loudnessRangeTarget?: number;
  method?: string;
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

