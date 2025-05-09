// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDAGVersionsResponseBodyDagVersionList } from "./ListDagversionsResponseBodyDagVersionList";


export class ListDAGVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the published versions.
   */
  dagVersionList?: ListDAGVersionsResponseBodyDagVersionList;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7775630-7901-51B9-8782-9B585EC0799A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dagVersionList: 'DagVersionList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagVersionList: ListDAGVersionsResponseBodyDagVersionList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dagVersionList && typeof (this.dagVersionList as any).validate === 'function') {
      (this.dagVersionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

