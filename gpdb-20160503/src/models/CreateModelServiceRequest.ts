// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aiNodes?: string[];
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
  modelParams?: { [key: string]: any };
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
      aiNodes: 'AiNodes',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      enablePublicConnection: 'EnablePublicConnection',
      inferenceEngine: 'InferenceEngine',
      modelName: 'ModelName',
      modelParams: 'ModelParams',
      replicas: 'Replicas',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodes: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      DBInstanceId: 'string',
      description: 'string',
      enablePublicConnection: 'boolean',
      inferenceEngine: 'string',
      modelName: 'string',
      modelParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      resourceGroupId: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiNodes)) {
      $dara.Model.validateArray(this.aiNodes);
    }
    if(this.modelParams) {
      $dara.Model.validateMap(this.modelParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

