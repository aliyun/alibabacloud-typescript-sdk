// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptArtifactsRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * The number of data entries to query in this request (deprecated).
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for the work name.
   * 
   * @example
   * 数字时代的营销策划与文案创作
   */
  query?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-az2xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      query: 'Query',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
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

