// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAirflowsRequest extends $dara.Model {
  /**
   * @example
   * 20
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 5
   */
  skip?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86302423828****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageIndex: 'PageIndex',
      skip: 'Skip',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageIndex: 'number',
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

