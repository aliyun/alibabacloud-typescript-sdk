// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  code?: string;
  /**
   * @remarks
   * The details of the validation result.
   */
  details?: { [key: string]: string };
  /**
   * @remarks
   * A description of the validation result.
   * 
   * @example
   * The connection is reachable.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The validation status.
   * 
   * - success: The validation is successful.
   * 
   * - failed: The validation failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      details: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.details) {
      $dara.Model.validateMap(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

