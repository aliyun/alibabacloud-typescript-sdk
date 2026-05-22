// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePageRequest extends $dara.Model {
  /**
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
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  siteIds?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      name: 'Name',
      siteIds: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
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

