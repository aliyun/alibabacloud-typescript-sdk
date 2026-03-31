// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePauseProtectionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether WAF protection is paused.
   * 
   * *   **0**: indicates that WAF protection is not paused. This is the default value.
   * *   **1**: indicates that WAF protection is paused.
   * 
   * @example
   * 0
   */
  pauseStatus?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-****-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pauseStatus: 'PauseStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseStatus: 'number',
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

