// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message that describes the result of the request.
   * 
   * @example
   * Rollout created successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is a unique identifier returned for each request and is used for troubleshooting and tracking.
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

