// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentAccuracyTestInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The accuracy test instance ID.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-4x8uzp5wjqu4xxxxxxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The UID of the workspace creator.
   * 
   * @example
   * 20282*****7591
   */
  creator?: string;
  datasource?: string;
  /**
   * @remarks
   * The ID of the test set file.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-30T07:31:09.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-06-30T07:31:09.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The language used for the analysis task.
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions during the test.
   * 
   * @example
   * 5
   */
  maxConcurrent?: string;
  /**
   * @remarks
   * The analysis mode to be tested.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The custom agent name.
   * 
   * @example
   * Agent测试名称
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether sessions are displayed after analysis. This parameter is not supported.
   * 
   * @example
   * true
   */
  needDelete?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      agentId: 'AgentId',
      creator: 'Creator',
      datasource: 'Datasource',
      fileId: 'FileId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      language: 'Language',
      maxConcurrent: 'MaxConcurrent',
      mode: 'Mode',
      name: 'Name',
      needDelete: 'NeedDelete',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      agentId: 'string',
      creator: 'string',
      datasource: 'string',
      fileId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      language: 'string',
      maxConcurrent: 'string',
      mode: 'number',
      name: 'string',
      needDelete: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentAccuracyTestInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentAccuracyTestInstancesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page. You can use this parameter together with NextToken to implement paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * zCXS*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-xxx-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The operation timestamp.
   * 
   * @example
   * 1768270172
   */
  timestamp?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataAgentAccuracyTestInstancesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      timestamp: 'string',
      total: 'string',
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

