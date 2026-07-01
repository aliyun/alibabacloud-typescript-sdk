// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotUpdateJobFailureInfo extends $dara.Model {
  /**
   * @remarks
   * The error level.
   * 
   * @example
   * LOW
   */
  failureSeverity?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * The error cause.
   * 
   * @example
   * “”
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failureSeverity: 'failureSeverity',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureSeverity: 'string',
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

