// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aiNodesShrink?: string;
  /**
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  enablePublicConnection?: boolean;
  /**
   * @example
   * vllm
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  modelParamsShrink?: string;
  /**
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodesShrink: 'AiNodes',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      enablePublicConnection: 'EnablePublicConnection',
      inferenceEngine: 'InferenceEngine',
      modelName: 'ModelName',
      modelParamsShrink: 'ModelParams',
      replicas: 'Replicas',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodesShrink: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      description: 'string',
      enablePublicConnection: 'boolean',
      inferenceEngine: 'string',
      modelName: 'string',
      modelParamsShrink: 'string',
      replicas: 'number',
      resourceGroupId: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

