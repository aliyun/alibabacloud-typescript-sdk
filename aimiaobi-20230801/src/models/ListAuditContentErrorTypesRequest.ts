// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditContentErrorTypesRequest extends $dara.Model {
  /**
   * @remarks
   * Maximum number of records
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * xxxx
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

