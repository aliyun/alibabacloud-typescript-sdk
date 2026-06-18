// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded content for the response page, corresponding to the specified `ContentType`.
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The value for the Content-Type HTTP header. Examples:
   * 
   * - text/html
   * 
   * - application/json
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
   * This parameter is required.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom response page. Retrieve this ID by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
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
  siteIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      siteIdsShrink: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
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

