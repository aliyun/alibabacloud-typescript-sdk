// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedLogstashRestartTimeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * second
   */
  unit?: string;
  /**
   * @remarks
   * The estimated restart time.
   * 
   * @example
   * 600
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

