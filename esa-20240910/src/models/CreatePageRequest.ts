// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePageRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded page content. Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * The Content-Type field in the HTTP header. Valid values:
   * 
   * *   text/html
   * *   application/json
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
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

