// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWritingStylesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token
   * 
   * @example
   * 下一页token
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters by writing scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * media
   */
  scene?: string;
  /**
   * @remarks
   * [The workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scene: 'Scene',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      scene: 'string',
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

