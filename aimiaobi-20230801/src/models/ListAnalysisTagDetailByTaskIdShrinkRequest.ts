// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdShrinkRequest extends $dara.Model {
  categoriesShrink?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * token-xxxx
   */
  nextToken?: string;
  /**
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      current: 'Current',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
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

