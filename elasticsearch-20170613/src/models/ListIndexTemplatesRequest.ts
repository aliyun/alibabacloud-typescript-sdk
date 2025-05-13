// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexTemplatesRequest extends $dara.Model {
  /**
   * @example
   * my-template
   */
  indexTemplate?: string;
  /**
   * @example
   * 5
   */
  page?: number;
  /**
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      indexTemplate: 'indexTemplate',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexTemplate: 'string',
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

