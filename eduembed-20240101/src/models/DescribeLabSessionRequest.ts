// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLabSessionRequest extends $dara.Model {
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
   * 1
   */
  labSessionId?: string;
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
      labSessionId: 'LabSessionId',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labSessionId: 'string',
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

