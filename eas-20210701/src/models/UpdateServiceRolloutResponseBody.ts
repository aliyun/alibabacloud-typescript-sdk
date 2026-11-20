// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message. Describes the request processing result. Valid values:
   * - "Rollout updated successfully": The policy is updated successfully.
   * - "Rollout paused successfully": The rollout is paused successfully.
   * - "Rollout resumed successfully": The rollout is resumed successfully.
   * 
   * @example
   * Rollout updated successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID. The unique identifier returned for each request, used for troubleshooting and tracking.
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

