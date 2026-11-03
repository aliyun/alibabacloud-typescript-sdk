// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentIndicesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the composable template.
   * 
   * @example
   * template
   */
  name?: string;
  /**
   * @remarks
   * The paging Settings for the page number in a paged query. Default value: 1.
   * 
   * @example
   * 5
   * 
   * **if can be null:**
   * true
   */
  page?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Default value: 10.
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

