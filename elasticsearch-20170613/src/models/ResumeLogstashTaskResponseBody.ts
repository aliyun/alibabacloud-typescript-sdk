// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeLogstashTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If the API operation is successfully called, this parameter is not returned.
   * 
   * @example
   * InstanceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message returned. If the API operation is successfully called, this parameter is not returned.
   * 
   * @example
   * The specified cluster does not exist. Check the cluster status and try again.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FA05123-745C-42FD-A69B-AFF48EF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the change task is resumed. Valid values:
   * 
   * *   true: The change task is resumed.
   * *   false: The change task fails to be resumed.
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

