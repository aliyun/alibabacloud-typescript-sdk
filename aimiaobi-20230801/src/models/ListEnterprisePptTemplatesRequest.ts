// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterprisePptTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return per page. Note: This parameter is not yet in effect.
   * 
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Note: This parameter is not yet in effect.
   * 
   * @example
   * XXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to skip (the \\"offset\\"). Note: This parameter is not yet in effect.
   * 
   * @example
   * 10
   */
  skip?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
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

