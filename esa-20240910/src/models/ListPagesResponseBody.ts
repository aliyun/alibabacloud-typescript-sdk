// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesResponseBodyPages extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded content of the error page. The content type is specified by the Content-Type field.
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The Content-Type field in the HTTP header.
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the custom error page.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom error page.[](~~2850223~~)
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The type of the custom error page.
   * 
   * @example
   * custom
   */
  kind?: string;
  /**
   * @remarks
   * The name of the custom error page.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The time when the custom error page was last modified.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      kind: 'string',
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom error pages. Each element in the array contains error page-specific information.
   */
  pages?: ListPagesResponseBodyPages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The number of custom error pages after filtering.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of custom error pages that you created.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: { 'type': 'array', 'itemType': ListPagesResponseBodyPages },
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pages)) {
      $dara.Model.validateArray(this.pages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

