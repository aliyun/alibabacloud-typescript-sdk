// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 52a33dc83779f63641e16f5146cd7125
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  statuses?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      statuses: 'Statuses',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      statuses: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

