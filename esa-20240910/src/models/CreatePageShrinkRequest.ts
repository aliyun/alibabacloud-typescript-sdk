// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The BASE64-encoded page content. The actual content format must match the value of `ContentType`.
   * 
   * **Encoding method**:
   * 1. Encode the original page content into a byte string by using UTF-8 encoding.
   * 2. Apply standard BASE64 encoding to the byte string.
   * 
   * **Example**:
   * - Original content: `<html>hello page</html>`
   * - BASE64: `PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=`
   * 
   * > The maximum size, supported character sets, and security filtering rules are subject to the server-side custom page specifications.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The MIME type of the page content. This value is returned to the client as the HTTP `Content-Type` response header after a match.
   * 
   * **Common values**:
   * - `text/html`: HTML page. The `Content` parameter must be set to the BASE64-encoded value of UTF-8 HTML text.
   * - `application/json`: JSON response. The `Content` parameter must be set to the BASE64-encoded value of a valid JSON string.
   * - `text/plain`: plain text. The `Content` parameter must be set to the BASE64-encoded value of plain text content.
   * 
   * > Note: The complete list of supported ContentType values is subject to the server-side specifications. If the specified `ContentType` does not match the actual format of `Content`, the client may fail to render the page properly.
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the page, used to identify the purpose of the page in the console list.
   * 
   * **Suggested content**: Use the scenarios and identity information of the page, such as "CC protection block page - Chinese version". This is an optional field. If not specified, the value is empty by default.
   * 
   * > The maximum field length is subject to the server-side specifications.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom page.
   * 
   * **Naming suggestions**: Use a short name that consists of letters, digits, and underscores, such as `blocked_page_v1`, for easy reference in rules. The specific character set, maximum length, uniqueness, and other constraints are **subject to the server-side custom page naming specifications**.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The list of website IDs to associate with this custom page.
   * 
   * - You can obtain website IDs by calling the `ListSites` operation.
   * - If you pass an empty list (no websites are associated), the page is still created but does not take effect. You can call the `UpdatePage` operation later to associate websites.
   * - If the list contains a website ID that does not belong to the current account, an `InvalidParameter` error is returned.
   */
  siteIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      name: 'Name',
      siteIdsShrink: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      name: 'string',
      siteIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

