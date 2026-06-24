// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKibanaPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the instance list. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'string',
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

