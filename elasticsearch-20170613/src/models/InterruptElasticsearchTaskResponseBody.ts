// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptElasticsearchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. Only displayed if an exception is returned.
   * 
   * @example
   * InstanceStatusNotSupportCurrentAction
   */
  code?: string;
  /**
   * @remarks
   * The error message. Only displayed if an exception is returned.
   * 
   * @example
   * The cluster is running tasks or in an error status. Try again later.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * Return results:
   * 
   * *   true: interrupted change successfully
   * *   false: interrupted change failed
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

