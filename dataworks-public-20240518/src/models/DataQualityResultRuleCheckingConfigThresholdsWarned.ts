// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityResultRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

