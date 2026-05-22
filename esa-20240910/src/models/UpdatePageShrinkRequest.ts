// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
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

