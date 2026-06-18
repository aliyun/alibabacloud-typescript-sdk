// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLargeModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * sk-sxxxxx*********xx
   */
  authCode?: string;
  /**
   * @remarks
   * A list of base models.
   */
  baseModelShrink?: string;
  /**
   * @remarks
   * The model code.
   * 
   * @example
   * Test Model Name
   */
  modelCode?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Test model
   */
  modelName?: string;
  /**
   * @remarks
   * The model URL.
   * 
   * @example
   * https://xxxxxxxxx
   */
  modelUrl?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Controls the randomness of the model\\"s output. A higher value increases randomness, and a lower value makes the output more deterministic.
   * 
   * @example
   * 0.1
   */
  temperature?: number;
  /**
   * @remarks
   * Restricts token selection to the top k most probable tokens.
   * 
   * @example
   * 2
   */
  topK?: number;
  /**
   * @remarks
   * Controls output diversity by using nucleus sampling. It defines a cumulative probability threshold for token selection, considering only the most likely tokens.
   * 
   * @example
   * 0.1
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

