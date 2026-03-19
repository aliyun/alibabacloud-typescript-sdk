// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptTemplatesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  careerId?: number;
  /**
   * @example
   * 1
   */
  colourId?: number;
  maxResults?: number;
  /**
   * @example
   * +CBOXvu2YLxC6DOua8Qupg==
   */
  nextToken?: string;
  /**
   * @example
   * 7
   */
  sceneId?: number;
  /**
   * @example
   * 1
   */
  styleId?: number;
  /**
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      careerId: 'CareerId',
      colourId: 'ColourId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sceneId: 'SceneId',
      styleId: 'StyleId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      careerId: 'number',
      colourId: 'number',
      maxResults: 'number',
      nextToken: 'string',
      sceneId: 'number',
      styleId: 'number',
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

