// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePageRequest extends $dara.Model {
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
   * The description of the custom error page.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom error page, which can be obtained by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
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
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
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

