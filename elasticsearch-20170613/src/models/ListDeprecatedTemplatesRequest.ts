// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeprecatedTemplatesRequest extends $dara.Model {
  /**
   * @example
   * component-openstore-index-template
   */
  name?: string;
  /**
   * @example
   * 5
   */
  page?: number;
  /**
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

