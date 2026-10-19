// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve additional results. You do not need to provide this parameter for the first request. Obtain the token for subsequent requests from the response of the previous request.
   * 
   * @example
   * uwCwQ5FFCDo=
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-32klhjk2312334jkh
   */
  workspaceId?: string;
  /**
   * @remarks
   * Filters workspaces by name using a fuzzy keyword match.
   * 
   * @example
   * ws_test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

