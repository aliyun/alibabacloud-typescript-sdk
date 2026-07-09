// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmThresholdConfig extends $dara.Model {
  max?: number;
  min?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  severity?: string;
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

