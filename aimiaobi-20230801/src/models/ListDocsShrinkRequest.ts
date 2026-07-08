// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Document folder.
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * Document name.
   * 
   * @example
   * 企业2022年報
   */
  docName?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @remarks
   * Maximum number of results returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Next page token.
   * 
   * @example
   * 52a33dc83779f63641e16f5146cd7125
   */
  nextToken?: string;
  /**
   * @remarks
   * Skip n records for paging.
   * 
   * @example
   * 10
   */
  skip?: number;
  /**
   * @remarks
   * Document status list.
   */
  statusesShrink?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace ID. For more information, see [How to Use Workspaces](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

