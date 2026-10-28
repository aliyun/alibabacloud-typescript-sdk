// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWarningThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the reseller customer account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792155717328010
   */
  uid?: number;
  /**
   * @remarks
   * The percentage value. Valid values: 1 to 100. When the available credit drops below this percentage of the total credit limit, an alert email is sent to the reseller partner account.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  warningValue?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      warningValue: 'WarningValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
      warningValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

