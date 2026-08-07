// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 用于测试
   */
  description?: string;
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
   * 名称
   * 
   * @example
   * 测试场景
   */
  name?: string;
  /**
   * @remarks
   * NLU引擎类型
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      nluEngine: 'NluEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      nluEngine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

