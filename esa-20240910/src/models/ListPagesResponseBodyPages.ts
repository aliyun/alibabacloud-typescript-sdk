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

