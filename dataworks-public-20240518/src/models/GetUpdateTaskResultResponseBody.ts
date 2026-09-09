// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpdateTaskResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The failure message. This field is returned if the update fails.
   * 
   * @example
   * Invalid Param xxx
   */
  failureMessage?: string;
  /**
   * @remarks
   * The update status. Valid values:
   * 
   * - Updating: The node is being updated.
   * - Updated: The node is updated.
   * - UpdateFailed: The node failed to be updated.
   * 
   * @example
   * Updated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpdateTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF020E7F
   */
  requestId?: string;
  /**
   * @remarks
   * The node update result.
   */
  result?: GetUpdateTaskResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetUpdateTaskResultResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

