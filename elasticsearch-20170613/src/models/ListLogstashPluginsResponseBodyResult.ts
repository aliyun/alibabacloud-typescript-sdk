// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The source of the plug-in.
   * 
   * @example
   * The clone filter is for duplicating events.
   */
  description?: string;
  /**
   * @example
   * logstash-filter-clone
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * https://xxx.html
   */
  specificationUrl?: string;
  /**
   * @example
   * INSTALLED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

