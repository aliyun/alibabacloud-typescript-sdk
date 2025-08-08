// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelSetModelProfileProps extends $dara.Model {
  contextSize?: number;
  llmMode?: string;
  static names(): { [key: string]: string } {
    return {
      contextSize: 'contextSize',
      llmMode: 'llmMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextSize: 'number',
      llmMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelSetModelProfile extends $dara.Model {
  /**
   * @example
   * 通义千问系列速度最快、成本很低的模型，适合简单任务。本模型是动态更新版本，模型更新不会提前通知，模型中英文综合能力显著提升，模型人类偏好显著提升，模型推理能力和复杂指令理解能力显著增强，困难任务上的表现更优，数学、代码能力显著提升。
   */
  description?: string;
  /**
   * @example
   * 通义千问-Turbo-Latest
   */
  displayName?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-turbo-latest
   */
  name?: string;
  props?: ModelSetModelProfileProps;
  /**
   * @example
   * predefined
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      enabled: 'enabled',
      name: 'name',
      props: 'props',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      enabled: 'boolean',
      name: 'string',
      props: ModelSetModelProfileProps,
      sourceType: 'string',
    };
  }

  validate() {
    if(this.props && typeof (this.props as any).validate === 'function') {
      (this.props as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

