// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDesignProjectFlowResponseBodyProjectFlow } from "./GetTableDesignProjectFlowResponseBodyProjectFlow";


export class GetTableDesignProjectFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the schema design process.
   */
  projectFlow?: GetTableDesignProjectFlowResponseBodyProjectFlow;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      projectFlow: 'ProjectFlow',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      projectFlow: GetTableDesignProjectFlowResponseBodyProjectFlow,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.projectFlow && typeof (this.projectFlow as any).validate === 'function') {
      (this.projectFlow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

