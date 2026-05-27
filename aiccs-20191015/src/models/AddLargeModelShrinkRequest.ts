// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLargeModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 授权码
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * 基础模型
   */
  baseModelShrink?: string;
  /**
   * @remarks
   * 模型名称
   * 
   * @example
   * Test Model Name
   */
  modelName?: string;
  /**
   * @remarks
   * 模型地址
   * 
   * @example
   * 示例值示例值
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
   * 16.46
   */
  temperature?: number;
  /**
   * @remarks
   * topK
   * 
   * @example
   * 87
   */
  topK?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 73.64386
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      baseModelShrink: 'BaseModel',
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

