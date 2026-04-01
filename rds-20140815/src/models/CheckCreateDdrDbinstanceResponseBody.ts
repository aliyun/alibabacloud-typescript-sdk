// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDdrDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data of the source instance can be restored across regions. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isValid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValid: 'IsValid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

