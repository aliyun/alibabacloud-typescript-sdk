// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditTermsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * XXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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

