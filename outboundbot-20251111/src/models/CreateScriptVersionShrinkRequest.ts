// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 交互配置
   */
  interactionConfigShrink?: string;
  /**
   * @remarks
   * 草稿版本的标签配置（JSON字符串）
   */
  labelConfigsShrink?: string;
  /**
   * @remarks
   * 场景ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  scriptId?: string;
  /**
   * @remarks
   * 话术配置
   */
  scriptProfileShrink?: string;
  /**
   * @remarks
   * 源版本ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b26
   */
  sourceVersionId?: string;
  /**
   * @remarks
   * 语音合成配置
   */
  synthesizerConfigShrink?: string;
  /**
   * @remarks
   * 语音识别配置
   */
  transcriberConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfigShrink: 'InteractionConfig',
      labelConfigsShrink: 'LabelConfigs',
      scriptId: 'ScriptId',
      scriptProfileShrink: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfigShrink: 'SynthesizerConfig',
      transcriberConfigShrink: 'TranscriberConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interactionConfigShrink: 'string',
      labelConfigsShrink: 'string',
      scriptId: 'string',
      scriptProfileShrink: 'string',
      sourceVersionId: 'string',
      synthesizerConfigShrink: 'string',
      transcriberConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

