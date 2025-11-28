// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of AI nodes for model deployment.
   * 
   * This parameter is required.
   */
  aiNodesShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/327176.html)
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
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
  enablePublicConnection?: boolean;
  /**
   * @remarks
   * The inference engine. Only vllm is supported.
   * 
   * @example
   * vllm
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @remarks
   * Model parameters (to be supported).
   */
  modelParamsShrink?: string;
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
   * The ID of the resource group to which the instance belongs. For more information about how to get the ID of a resource group, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * 127.0.0.1 indicates that access from any external IP address is prohibited. You can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP address whitelist after the instance is created.
   * 
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

