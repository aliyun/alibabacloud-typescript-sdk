// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -
   */
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 875
   */
  labId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -
   */
  ramAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labId: 'LabId',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labId: 'number',
      ramAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

