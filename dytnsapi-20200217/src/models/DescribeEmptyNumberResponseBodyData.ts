// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmptyNumberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The specified phone number.
   * 
   * @example
   * 189****1234
   */
  number?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **EMPTY**: The queried phone number is a nonexistent number.
   * *   **NORMAL**: The queried phone number is valid.
   * *   **SUSPECT_EMPTY**: The queried phone number is suspected to be a nonexistent number.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * @example
   * EMPTY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

