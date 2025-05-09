// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDesignProjectInfoResponseBodyProjectInfo } from "./GetTableDesignProjectInfoResponseBodyProjectInfo";


export class GetTableDesignProjectInfoResponseBody extends $dara.Model {
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
   * The information about the schema design project.
   */
  projectInfo?: GetTableDesignProjectInfoResponseBodyProjectInfo;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 48778434-5796-571A-8455-A59146588401
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
      projectInfo: 'ProjectInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      projectInfo: GetTableDesignProjectInfoResponseBodyProjectInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

