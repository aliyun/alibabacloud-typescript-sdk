// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePageRequest extends $dara.Model {
  /**
   * @remarks
   * The BASE64-encoded page content, which must be consistent with `ContentType`.
   * 
   * **Encoding method**:
   * 1. Convert the original page content to a UTF-8 byte string.
   * 2. Encode the byte string using standard BASE64 encoding.
   * 
   * **Example**: `<html>hello page</html>` → `PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=`
   * 
   * > The maximum size limit is subject to the server-side custom page specification. If this parameter is not specified, the original page content is retained.
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The MIME type of the page content, which is returned to the client as the HTTP `Content-Type` response header when a rule is matched.
   * 
   * **Common values**:
   * - `text/html`: HTML page
   * - `application/json`: JSON response
   * 
   * > The complete set of supported values is subject to the server-side specification. The actual format of `Content` must match this field. A mismatch may cause browser rendering issues.
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the page after the update. This is used to identify the purpose of the page in the console list. This is an optional field. If this parameter is not specified, the original description is retained. The maximum field length is subject to the server-side limit.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom response page. You can obtain this value by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom response page after the update.
   * 
   * **Naming suggestion**: Use a combination of letters, digits, and underscores (such as `blocked_page_v2`) for easy reference in rules. The character set, maximum length, and uniqueness constraints are subject to the server-side naming conventions for custom pages. If this parameter is not specified, the original name is retained.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The list of site IDs associated with this page after the update. This parameter uses full overwrite semantics.
   * 
   * - You can obtain site IDs by calling the `ListSites` operation.
   * - Passing an empty list dissociates all sites from the page.
   * - Including a site ID that does not belong to your account returns an `InvalidParameter` error.
   */
  siteIds?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      siteIds: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      siteIds: { 'type': 'array', 'itemType': 'number' },
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

