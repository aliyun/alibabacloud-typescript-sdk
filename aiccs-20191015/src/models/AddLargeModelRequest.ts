// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLargeModelRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * sk-xxxxxxxxxxx*******xx
   */
  authCode?: string;
  /**
   * @remarks
   * The base model.
   */
  baseModel?: string[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Test Model Name
   */
  modelName?: string;
  /**
   * @remarks
   * The model URL.
   * 
   * @example
   * https://xxxxxxxxxxx
   */
  modelUrl?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The temperature.
   * 
   * @example
   * 0.1
   */
  temperature?: number;
  /**
   * @remarks
   * The `top-k` value.
   * 
   * @example
   * 1
   */
  topK?: number;
  /**
   * @remarks
   * The `top-p` value.
   * 
   * @example
   * 0.1
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      baseModel: 'BaseModel',
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
      baseModel: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.baseModel)) {
      $dara.Model.validateArray(this.baseModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

