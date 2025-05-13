// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The source type of the plug-in.
   * 
   * @example
   * IK analysis plug-in for Elasticsearch.
   */
  description?: string;
  /**
   * @example
   * analysis-ik
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
   * https://xxxx.html
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

