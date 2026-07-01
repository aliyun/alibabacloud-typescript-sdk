// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckYikeAIAppJobResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cause of the parameter validation error.
   * 
   * @example
   * ImageCheckFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The application parameter name.
   * 
   * @example
   * LoadImage.1.TargetImage
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckYikeAIAppJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * Returned if the precheck fails. This parameter contains only the parameters that failed the check.
   */
  result?: PrecheckYikeAIAppJobResponseBodyResult[];
  /**
   * @remarks
   * The precheck result. Valid values are:
   * 
   * - Success: The precheck was successful.
   * 
   * - Failed: The precheck failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PrecheckYikeAIAppJobResponseBodyResult },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

