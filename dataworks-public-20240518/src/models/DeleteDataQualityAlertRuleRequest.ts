// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality rule template.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
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

