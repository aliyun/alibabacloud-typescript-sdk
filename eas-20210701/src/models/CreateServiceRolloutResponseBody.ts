// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * A message that indicates the result of the operation.
   * 
   * @example
   * Rollout created successfully
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID. Use this ID for troubleshooting and traceability.
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

