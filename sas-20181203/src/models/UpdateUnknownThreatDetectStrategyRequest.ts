// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnknownThreatDetectStrategyRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: string;
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

