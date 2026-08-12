// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmThresholdConfig extends $dara.Model {
  /**
   * @remarks
   * The upper bound of the range.
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range.
   */
  min?: number;
  /**
   * @remarks
   * The alert level.
   * 
   * This parameter is required.
   */
  severity?: string;
  /**
   * @remarks
   * The threshold. This parameter is required for APM_SIMPLE_CONDITION.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'max',
      min: 'min',
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

