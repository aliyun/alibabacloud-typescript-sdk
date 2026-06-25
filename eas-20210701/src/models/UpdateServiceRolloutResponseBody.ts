// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * A message that indicates the result of the request. Possible values include:
   * 
   * - "Rollout updated successfully"
   * 
   * - "Rollout paused successfully"
   * 
   * - "Rollout resumed successfully"
   * 
   * @example
   * Rollout updated successfully
   */
  message?: string;
  /**
   * @remarks
   * A unique identifier for the request. You can use this request ID for troubleshooting and tracking.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

