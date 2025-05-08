// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPromptTemplatesResponseBodyPromptTemplates } from "./ListPromptTemplatesResponseBodyPromptTemplates";


export class ListPromptTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of returned entries.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start position of the next query.
   * 
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @remarks
   * The templates.
   */
  promptTemplates?: ListPromptTemplatesResponseBodyPromptTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5AB071
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-us9hjmt32nysdxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      promptTemplates: 'promptTemplates',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      promptTemplates: { 'type': 'array', 'itemType': ListPromptTemplatesResponseBodyPromptTemplates },
      requestId: 'string',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.promptTemplates)) {
      $dara.Model.validateArray(this.promptTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

