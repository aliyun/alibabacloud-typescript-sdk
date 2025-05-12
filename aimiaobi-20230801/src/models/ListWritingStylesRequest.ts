// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWritingStylesRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * media
   */
  scene?: string;
  /**
   * @remarks
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

