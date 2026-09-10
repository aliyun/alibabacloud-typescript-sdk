// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThresholdList extends $dara.Model {
  /**
   * @remarks
   * The upper bound of the interval.
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the interval.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The warning level.
   * 
   * This parameter is required.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 80
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

