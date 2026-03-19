// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptArtifactsRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  query?: string;
  /**
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

