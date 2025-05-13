// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKibanaPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the plug-in.
   * 
   * @example
   * Customize DSL statements to query data.
   */
  description?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * bsearch_querybuilder
   */
  name?: string;
  /**
   * @remarks
   * The source of the plug-in.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The URL of the introduction to the plug-in. The value null is supported.
   * 
   * @example
   * https://xxxx
   */
  specificationUrl?: string;
  /**
   * @remarks
   * The installation status of the plug-in.
   * 
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

