// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the flow.
   * 
   * @example
   * flow-c5007b4a03a2446cbe9d
   */
  flowId?: string;
  /**
   * @remarks
   * The ID of the last conversation record.
   * 
   * @example
   * 77be60cd-237b-4ca9-9c46-48b663cb****
   */
  lastId?: string;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * The pin mark for application favorites.
   * 
   * @example
   * true
   */
  pinned?: string;
  /**
   * @remarks
   * The sorting criterion.
   * 
   * @example
   * CreatedAt
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the ContextDB workspace.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      lastId: 'LastId',
      limit: 'Limit',
      pinned: 'Pinned',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      lastId: 'string',
      limit: 'string',
      pinned: 'string',
      sortBy: 'string',
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

