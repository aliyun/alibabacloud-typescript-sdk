// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceDeployableResponseBodyCheckResults extends $dara.Model {
  /**
   * @remarks
   * Returns a hint message for the result.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Check type, invalid values:
   * 
   * - Balance ：Account balance.
   * 
   * - Quota:  Account quota.
   * 
   * @example
   * Balance
   */
  type?: string;
  /**
   * @remarks
   * Inspection result.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      type: 'string',
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

