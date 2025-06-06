// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConfig } from "./ModelConfig";


export class DeployCustomContainerInputModelConfig extends $dara.Model {
  framework?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  prefix?: string;
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  syncStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
      syncStrategy: 'syncStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
      syncStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiModelConfig)) {
      $dara.Model.validateArray(this.multiModelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

