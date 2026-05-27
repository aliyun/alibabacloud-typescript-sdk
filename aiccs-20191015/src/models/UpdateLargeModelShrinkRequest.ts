// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLargeModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 授权码
   * 
   * @example
   * 示例值示例值示例值
   */
  authCode?: string;
  /**
   * @remarks
   * 基础模型
   */
  baseModelShrink?: string;
  /**
   * @remarks
   * 模型编码
   * 
   * @example
   * Test Model Name
   */
  modelCode?: string;
  /**
   * @remarks
   * 模型名称
   * 
   * @example
   * 示例值
   */
  modelName?: string;
  /**
   * @remarks
   * 模型地址
   * 
   * @example
   * 示例值示例值示例值
   */
  modelUrl?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 温度
   * 
   * @example
   * 49.29
   */
  temperature?: number;
  /**
   * @remarks
   * topK
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 84.38427
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      baseModelShrink: 'BaseModel',
      modelCode: 'ModelCode',
      modelName: 'ModelName',
      modelUrl: 'ModelUrl',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      temperature: 'Temperature',
      topK: 'TopK',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      baseModelShrink: 'string',
      modelCode: 'string',
      modelName: 'string',
      modelUrl: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      temperature: 'number',
      topK: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

