// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentAccuracyTestInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The accuracy test instance ID.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * Nes****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

