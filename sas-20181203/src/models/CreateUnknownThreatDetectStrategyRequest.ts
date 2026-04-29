// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUnknownThreatDetectStrategyRequest extends $dara.Model {
  /**
   * @example
   * UNKNOWN_THREAT_DETECT_CONFIG_****
   */
  assetSelectionType?: string;
  /**
   * @example
   * 1
   */
  durationDaysAfterInit?: number;
  /**
   * @example
   * 1
   */
  durationDaysAfterStop?: number;
  /**
   * @example
   * strategy****
   */
  name?: string;
  /**
   * @example
   * hash
   */
  studyMode?: string;
  static names(): { [key: string]: string } {
    return {
      assetSelectionType: 'AssetSelectionType',
      durationDaysAfterInit: 'DurationDaysAfterInit',
      durationDaysAfterStop: 'DurationDaysAfterStop',
      name: 'Name',
      studyMode: 'StudyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSelectionType: 'string',
      durationDaysAfterInit: 'number',
      durationDaysAfterStop: 'number',
      name: 'string',
      studyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

