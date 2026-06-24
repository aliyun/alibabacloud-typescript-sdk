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
   * The page number for paging. Default value: 1.
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
   * The number of entries per page for paging. Default value: 10.
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

