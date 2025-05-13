// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSettingsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Scenarios of intelligent maintenance.
   * 
   * @example
   * Business Search
   */
  scene?: string;
  /**
   * @remarks
   * The timestamp of the last update for Intelligent Maintenance scenarios.
   * 
   * @example
   * 1588994035385
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

