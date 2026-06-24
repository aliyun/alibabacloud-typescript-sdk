// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * analysis-ik
   */
  name?: string;
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The plugin source type. Only SYSTEM (system plugin) is supported.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'string',
      size: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

