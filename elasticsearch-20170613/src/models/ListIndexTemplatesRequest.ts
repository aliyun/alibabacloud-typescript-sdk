// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The index template name.
   * 
   * @example
   * my-template
   */
  indexTemplate?: string;
  /**
   * @remarks
   * The page number of the instance list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 5
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 20.
   * 
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

