// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BuildCacheConfig } from "./BuildCacheConfig";


export class DefaultBuilderConfig extends $dara.Model {
  cache?: BuildCacheConfig;
  languages?: string[];
  /**
   * @example
   * ./src
   */
  rootPath?: string;
  steps?: any[];
  static names(): { [key: string]: string } {
    return {
      cache: 'cache',
      languages: 'languages',
      rootPath: 'rootPath',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cache: BuildCacheConfig,
      languages: { 'type': 'array', 'itemType': 'string' },
      rootPath: 'string',
      steps: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(this.cache && typeof (this.cache as any).validate === 'function') {
      (this.cache as any).validate();
    }
    if(Array.isArray(this.languages)) {
      $dara.Model.validateArray(this.languages);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

