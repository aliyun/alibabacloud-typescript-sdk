// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeprecatedTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The index template name.
   * 
   * @example
   * component-openstore-index-template
   */
  name?: string;
  /**
   * @remarks
   * The page number Settings for a paged query. Paging is used to retrieve results.
   * 
   * @example
   * 5
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page Settings for a paged query. Paging is used to retrieve results.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

