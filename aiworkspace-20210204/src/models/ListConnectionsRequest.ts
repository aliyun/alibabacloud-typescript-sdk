// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Visibility of the connection. Valid values:
   * 
   * - PUBLIC: visible to all workspace members.
   * 
   * - PRIVATE: visible only to the creator.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * List of connection IDs to filter by.
   */
  connectionIds?: string[];
  /**
   * @remarks
   * Connection name. Supports fuzzy matching.
   * 
   * @example
   * Database connection
   */
  connectionName?: string;
  /**
   * @remarks
   * List of connection types to filter by.
   */
  connectionTypes?: string[];
  /**
   * @remarks
   * Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 12908*******3242
   */
  creator?: string;
  /**
   * @remarks
   * Encryption option for sensitive fields in the response. Valid values:
   * 
   * - PlainText: returns values in plaintext.
   * 
   * - Secret: returns values in ciphertext.
   * 
   * @example
   * PlainText
   */
  encryptOption?: string;
  /**
   * @remarks
   * Maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Model identifier. Filters connections associated with this model.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * List of model types to filter by.
   */
  modelTypes?: string[];
  /**
   * @remarks
   * The token that marks the starting position for the next page of results.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * Sort order. Use with the SortBy parameter. Valid values:
   * 
   * - ASC: ascending order.
   * 
   * - DESC (default): descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * Field by which to sort results. Default value: GmtCreateTime. Valid values:
   * 
   * - GmtCreateTime (default): sorts by creation time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Whether tool calling is supported. Valid values:
   * 
   * - true: supported.
   * 
   * - false: not supported.
   * 
   * @example
   * true
   */
  toolCall?: boolean;
  /**
   * @remarks
   * Workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      connectionIds: 'ConnectionIds',
      connectionName: 'ConnectionName',
      connectionTypes: 'ConnectionTypes',
      creator: 'Creator',
      encryptOption: 'EncryptOption',
      maxResults: 'MaxResults',
      model: 'Model',
      modelTypes: 'ModelTypes',
      nextToken: 'NextToken',
      order: 'Order',
      sortBy: 'SortBy',
      toolCall: 'ToolCall',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      connectionIds: { 'type': 'array', 'itemType': 'string' },
      connectionName: 'string',
      connectionTypes: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      encryptOption: 'string',
      maxResults: 'number',
      model: 'string',
      modelTypes: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      order: 'string',
      sortBy: 'string',
      toolCall: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionIds)) {
      $dara.Model.validateArray(this.connectionIds);
    }
    if(Array.isArray(this.connectionTypes)) {
      $dara.Model.validateArray(this.connectionTypes);
    }
    if(Array.isArray(this.modelTypes)) {
      $dara.Model.validateArray(this.modelTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

