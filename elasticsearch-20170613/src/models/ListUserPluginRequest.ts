// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * my-plugin
   */
  name?: string;
  /**
   * @remarks
   * The page number of the plug-in list.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The number of records per page.
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

