// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * USER
   * 
   * @example
   * logstash-filter-clone
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10
   */
  page?: number;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The description of the plug-in.
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

