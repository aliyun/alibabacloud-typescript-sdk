// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageResponseBody extends $dara.Model {
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
   * @remarks
   * The name of the custom response page.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
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
   * The list of associated site IDs.
   */
  siteIds?: number[];
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
      name: 'Name',
      requestId: 'RequestId',
      siteIds: 'SiteIds',
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
      requestId: 'string',
      siteIds: { 'type': 'array', 'itemType': 'number' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.siteIds)) {
      $dara.Model.validateArray(this.siteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

