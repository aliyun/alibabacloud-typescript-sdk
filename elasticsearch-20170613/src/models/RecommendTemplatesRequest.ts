// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario-specific templatetype used by the cluster. Valid values:
   * 
   * - general: general-purpose scenario
   * - analysisVisualization: data analytics scenario
   * - dbAcceleration: database acceleration scenario
   * - search: search scenario
   * - log: log scenario
   * 
   * > Commercial model instances support the general-purpose, data analytics, database acceleration, and search scenarios. Advanced Edition instances support only the log scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * general
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

