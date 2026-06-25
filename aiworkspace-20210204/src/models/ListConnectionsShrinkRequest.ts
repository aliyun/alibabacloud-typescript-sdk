// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsShrinkRequest extends $dara.Model {
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
  connectionIdsShrink?: string;
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
  connectionTypesShrink?: string;
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
  modelTypesShrink?: string;
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
      connectionIdsShrink: 'ConnectionIds',
      connectionName: 'ConnectionName',
      connectionTypesShrink: 'ConnectionTypes',
      creator: 'Creator',
      encryptOption: 'EncryptOption',
      maxResults: 'MaxResults',
      model: 'Model',
      modelTypesShrink: 'ModelTypes',
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
      connectionIdsShrink: 'string',
      connectionName: 'string',
      connectionTypesShrink: 'string',
      creator: 'string',
      encryptOption: 'string',
      maxResults: 'number',
      model: 'string',
      modelTypesShrink: 'string',
      nextToken: 'string',
      order: 'string',
      sortBy: 'string',
      toolCall: 'boolean',
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

