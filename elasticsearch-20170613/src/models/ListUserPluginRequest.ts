// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPluginRequest extends $dara.Model {
  /**
   * @remarks
   * Plugin Name.
   * 
   * @example
   * my-plugin
   */
  name?: string;
  /**
   * @remarks
   * Page number for paging the plugin list.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 50
   */
  size?: string;
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
      page: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

