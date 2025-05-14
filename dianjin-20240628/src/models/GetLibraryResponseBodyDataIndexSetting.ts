// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLibraryResponseBodyDataIndexSettingChunkStrategy } from "./GetLibraryResponseBodyDataIndexSettingChunkStrategy";
import { GetLibraryResponseBodyDataIndexSettingModelConfig } from "./GetLibraryResponseBodyDataIndexSettingModelConfig";
import { GetLibraryResponseBodyDataIndexSettingQueryEnhancer } from "./GetLibraryResponseBodyDataIndexSettingQueryEnhancer";
import { GetLibraryResponseBodyDataIndexSettingRecallStrategy } from "./GetLibraryResponseBodyDataIndexSettingRecallStrategy";
import { GetLibraryResponseBodyDataIndexSettingTextIndexSetting } from "./GetLibraryResponseBodyDataIndexSettingTextIndexSetting";
import { GetLibraryResponseBodyDataIndexSettingVectorIndexSetting } from "./GetLibraryResponseBodyDataIndexSettingVectorIndexSetting";


export class GetLibraryResponseBodyDataIndexSetting extends $dara.Model {
  chunkStrategy?: GetLibraryResponseBodyDataIndexSettingChunkStrategy;
  modelConfig?: GetLibraryResponseBodyDataIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: GetLibraryResponseBodyDataIndexSettingQueryEnhancer;
  recallStrategy?: GetLibraryResponseBodyDataIndexSettingRecallStrategy;
  textIndexSetting?: GetLibraryResponseBodyDataIndexSettingTextIndexSetting;
  vectorIndexSetting?: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: GetLibraryResponseBodyDataIndexSettingChunkStrategy,
      modelConfig: GetLibraryResponseBodyDataIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: GetLibraryResponseBodyDataIndexSettingQueryEnhancer,
      recallStrategy: GetLibraryResponseBodyDataIndexSettingRecallStrategy,
      textIndexSetting: GetLibraryResponseBodyDataIndexSettingTextIndexSetting,
      vectorIndexSetting: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting,
    };
  }

  validate() {
    if(this.chunkStrategy && typeof (this.chunkStrategy as any).validate === 'function') {
      (this.chunkStrategy as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.queryEnhancer && typeof (this.queryEnhancer as any).validate === 'function') {
      (this.queryEnhancer as any).validate();
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.textIndexSetting && typeof (this.textIndexSetting as any).validate === 'function') {
      (this.textIndexSetting as any).validate();
    }
    if(this.vectorIndexSetting && typeof (this.vectorIndexSetting as any).validate === 'function') {
      (this.vectorIndexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

