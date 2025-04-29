// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportOASTaskResponseBodyApiResultsApiResult extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * c5a0c2900ff746b789c007545be22fb8
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * GetByCreatorIdUsingGET
   */
  apiName?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * release data api 411055691505041
   */
  description?: string;
  /**
   * @remarks
   * The cause of the failure if the API fails to be imported.
   * 
   * @example
   * Internal Error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 736508d885074167ba8fbce3bc95ea0b
   */
  groupId?: string;
  /**
   * @remarks
   * The HTTP request HTTP method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /creator/getByCreatorId
   */
  path?: string;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   * 
   * @example
   * WAIT
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      method: 'Method',
      path: 'Path',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      errorMessage: 'string',
      groupId: 'string',
      method: 'string',
      path: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

