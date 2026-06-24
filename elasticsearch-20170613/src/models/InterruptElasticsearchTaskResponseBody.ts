// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptElasticsearchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned only when an exception occurs.
   * 
   * @example
   * InstanceStatusNotSupportCurrentAction
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an exception occurs.
   * 
   * @example
   * The cluster is running tasks or in an error status. Try again later.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. Valid values:
   * 
   * - true: The change is interrupted.
   * - false: The change failed to be interrupted.
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

