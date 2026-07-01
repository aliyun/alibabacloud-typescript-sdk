// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploymentDraft } from "./DeploymentDraft";


export class ListDeploymentDraftsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of job drafts that match the query. This parameter is returned if the request is successful. If the request fails, this parameter is empty.
   */
  data?: DeploymentDraft[];
  /**
   * @remarks
   * - If the request fails, the error code is returned.
   * 
   * - If the request is successful, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - If the request fails, the error message is returned.
   * 
   * - If the request is successful, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. If this parameter is not empty and its value is not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries on the returned page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 69
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DeploymentDraft },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
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

