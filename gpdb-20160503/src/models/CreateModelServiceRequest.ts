// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AI nodes used for model deployment.
   * 
   * This parameter is required.
   */
  aiNodes?: string[];
  /**
   * @remarks
   * The idempotency check. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * @example
   * false
   */
  enablePublicConnection?: boolean;
  /**
   * @remarks
   * The inference engine. Currently, only vllm is supported.
   * 
   * @example
   * vllm
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * The model name.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @remarks
   * The model parameters. This parameter is not supported.
   * 
   * @example
   * Not yet available.
   */
  modelParams?: { [key: string]: any };
  /**
   * @remarks
   * The number of model service replicas.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP whitelist.
   * 
   * The value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. After the instance is created, you can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP whitelist.
   * 
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

