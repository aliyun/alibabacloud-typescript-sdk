// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptTemplatesResponseBodyPromptTemplates extends $dara.Model {
  /**
   * @remarks
   * The template content
   */
  content?: string;
  /**
   * @remarks
   * The template name.
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * d6935b7efbe34d11b13df9307151cf8c
   */
  promptTemplateId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * "System"
   */
  type?: string;
  /**
   * @remarks
   * The variables of the template.
   */
  variables?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      promptTemplateId: 'promptTemplateId',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      promptTemplateId: 'string',
      type: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

