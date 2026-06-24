// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * logstash-filter-clone
   */
  name?: string;
  /**
   * @remarks
   * The page number of the plugin list. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 10
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page in paging settings. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The plugin source. Valid values:
   * 
   * - USER: custom plugin
   * - SYSTEM: system preset plugin.
   * 
   * @example
   * USER
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
      page: 'number',
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

