// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesResponseBodyPagesModeration extends $dara.Model {
  /**
   * @example
   * []
   */
  reasons?: string[];
  /**
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBodyPages extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded response page content corresponding to the Content-Type.
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
   * The description of the custom response page.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom response page. You can obtain this value by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) operation.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The type of the custom response page.
   * 
   * @example
   * custom
   */
  kind?: string;
  /**
   * @example
   * {}
   */
  moderation?: ListPagesResponseBodyPagesModeration;
  /**
   * @remarks
   * The name of the custom response page.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The last modification time of the custom response page.
   * 
   * Format: RFC 3339 / ISO 8601, UTC time zone (ending with Z).
   * 
   * Example: 2026-06-10T14:23:45Z
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
      moderation: 'Moderation',
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
      moderation: ListPagesResponseBodyPagesModeration,
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.moderation && typeof (this.moderation as any).validate === 'function') {
      (this.moderation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
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
   * The array of custom response pages. Each object in the array contains the details of a page.
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
   * The number of custom response pages after filtering.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of custom response pages created by the user.
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

