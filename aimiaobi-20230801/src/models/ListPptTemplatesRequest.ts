// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The career ID.
   * 
   * @example
   * 1
   */
  careerId?: number;
  /**
   * @remarks
   * The color ID.
   * 
   * @example
   * 1
   */
  colourId?: number;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 暂不支持修改，固定为10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * +CBOXvu2YLxC6DOua8Qupg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The template scenario ID.
   * 
   * @example
   * 7
   */
  sceneId?: number;
  /**
   * @remarks
   * The style ID.
   * 
   * @example
   * 1
   */
  styleId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
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

