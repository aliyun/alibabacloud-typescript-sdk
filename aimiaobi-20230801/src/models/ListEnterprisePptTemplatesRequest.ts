// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterprisePptTemplatesRequest extends $dara.Model {
  /**
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @example
   * XXXX
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  /**
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

