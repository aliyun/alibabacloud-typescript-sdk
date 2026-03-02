// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SavepointFailure extends $dara.Model {
  /**
   * @remarks
   * The time when the deployment fails.
   * 
   * @example
   * 1655006835
   */
  failedAt?: number;
  /**
   * @remarks
   * The failure information.
   * 
   * @example
   * create savepoint failed
   */
  message?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * IO Exception
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failedAt: 'failedAt',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedAt: 'number',
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

