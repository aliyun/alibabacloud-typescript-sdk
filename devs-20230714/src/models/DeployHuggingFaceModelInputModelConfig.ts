// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig } from "./DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig";
import { ModelConfig } from "./ModelConfig";


export class DeployHuggingFaceModelInputModelConfig extends $dara.Model {
  fmkHuggingFaceConfig?: DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig;
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
      fmkHuggingFaceConfig: 'fmkHuggingFaceConfig',
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
      fmkHuggingFaceConfig: DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig,
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
    if(this.fmkHuggingFaceConfig && typeof (this.fmkHuggingFaceConfig as any).validate === 'function') {
      (this.fmkHuggingFaceConfig as any).validate();
    }
    if(Array.isArray(this.multiModelConfig)) {
      $dara.Model.validateArray(this.multiModelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

