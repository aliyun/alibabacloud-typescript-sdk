// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSemanticJobLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The raw log text returned in this response.
   * 
   * @example
   * semantic job started
   */
  logContent?: string;
  /**
   * @remarks
   * Indicates whether the current log segment has been read to the end. A value of true indicates that no more content follows this segment.
   */
  logEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      logContent: 'LogContent',
      logEnd: 'LogEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logContent: 'string',
      logEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSemanticJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of log segments returned by the executor. The current POP contract does not expose sqlIndex or offset externally. Log segments are returned based on the default behavior of the operation.
   */
  data?: GetSemanticJobLogResponseBodyData[];
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSemanticJobLogResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

