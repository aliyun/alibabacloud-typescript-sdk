// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page content, which must be provided in BASE64 encoding. For example, the value PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4= decodes to \\<html>hello page\\</html>.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The `Content-Type` HTTP header. Examples:
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
   * The description of the page.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom error page.
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

