// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseApiKeysRequest extends $dara.Model {
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
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * (null)
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      memberId: 'MemberId',
      nextToken: 'NextToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memberId: 'string',
      nextToken: 'string',
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

