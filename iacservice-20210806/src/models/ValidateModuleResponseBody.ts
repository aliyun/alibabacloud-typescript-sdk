// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateModuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The check ID.
   * 
   * @example
   * BF72A6FB-B07
   */
  moduleValidationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  /**
   * @remarks
   * The check result. Valid values:
   * - Initializing: The check is being initialized.
   * - Validating: The check is in progress.
   * - Validated: The check succeeded.
   * - Errored: The check failed.
   * 
   * @example
   * Validating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      moduleValidationId: 'moduleValidationId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      moduleValidationId: 'string',
      requestId: 'string',
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

