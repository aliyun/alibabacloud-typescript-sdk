// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsShrinkRequest extends $dara.Model {
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
  statusesShrink?: string;
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
      statusesShrink: 'Statuses',
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
      statusesShrink: 'string',
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

