// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWarningThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the partner‘s customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792155717328010
   */
  uid?: number;
  /**
   * @remarks
   * Percentage, 1 to 100. When the available credit limit is lower than the credit limit percentage, an email is sent to the main account.
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

