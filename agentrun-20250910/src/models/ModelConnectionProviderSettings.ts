// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConnectionProviderSettings extends $dara.Model {
  /**
   * @remarks
   * 模型提供商的默认API基础地址
   * 
   * @example
   * https://api.openai.com/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * 该连接支持的模型名称列表
   */
  modelNames?: string[];
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      modelNames: 'modelNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      modelNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

