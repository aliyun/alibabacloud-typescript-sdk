// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of connection IDs.
   */
  connectionIdsShrink?: string;
  /**
   * @remarks
   * The connection name.
   */
  connectionName?: string;
  /**
   * @remarks
   * The list of connection types.
   */
  connectionTypesShrink?: string;
  creator?: string;
  /**
   * @remarks
   * The encryption settings. Valid values:
   * 
   * *   PlainText
   * *   Secret
   * 
   * @example
   * PlainText
   */
  encryptOption?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * The list of model types.
   */
  modelTypesShrink?: string;
  /**
   * @remarks
   * The pagination token that indicates the start position from which to retrieve data on the next page.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy.
   * 
   * *   ASC: ascending order.
   * *   DESC: descending order. This is the default value.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The field used to sort the results in queries by page. Default value: GmtCreateTime. Valid value:
   * 
   * *   GmtCreateTime: The results are sorted by creation time. This is the default value.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether a tool can be called by using ToolCall. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  toolCall?: boolean;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
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

