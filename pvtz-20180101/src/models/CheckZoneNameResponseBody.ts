// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckZoneNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the check. Valid values:
   * 
   * - **true**: The zone name can be added.
   * 
   * - **false**: The zone name cannot be added.
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * CA29B88F-A571-4123-80D5-768AC2F7F806
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

