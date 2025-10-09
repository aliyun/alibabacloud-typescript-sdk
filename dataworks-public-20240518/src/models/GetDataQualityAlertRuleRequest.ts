// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The data quality monitoring alert rule ID.
   * 
   * @example
   * 113642
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

