// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUnknownThreatDetectStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The asset selection identifier.
   * 
   * @example
   * UNKNOWN_THREAT_DETECT_CONFIG_****
   */
  assetSelectionType?: string;
  /**
   * @remarks
   * The number of days after the model is initially created before learning ends.
   * 
   * @example
   * 1
   */
  durationDaysAfterInit?: number;
  /**
   * @remarks
   * The number of days after no new processes are added to the model before learning ends.
   * 
   * @example
   * 1
   */
  durationDaysAfterStop?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * strategy****
   */
  name?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * - **hash**: process hash
   * - **path**: process path
   * 
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

