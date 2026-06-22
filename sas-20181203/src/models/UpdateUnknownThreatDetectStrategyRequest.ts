// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnknownThreatDetectStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days the model learns for after its creation.
   * 
   * @example
   * 1
   */
  durationDaysAfterInit?: number;
  /**
   * @remarks
   * The number of consecutive days without new processes before the model stops learning.
   * 
   * @example
   * 1
   */
  durationDaysAfterStop?: number;
  /**
   * @remarks
   * The ID of the unknown threat detection strategy to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The name of the unknown threat detection strategy.
   * 
   * @example
   * strategy****
   */
  name?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values are:
   * 
   * - **hash**: process hash
   * 
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  static names(): { [key: string]: string } {
    return {
      durationDaysAfterInit: 'DurationDaysAfterInit',
      durationDaysAfterStop: 'DurationDaysAfterStop',
      id: 'Id',
      name: 'Name',
      studyMode: 'StudyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationDaysAfterInit: 'number',
      durationDaysAfterStop: 'number',
      id: 'string',
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

