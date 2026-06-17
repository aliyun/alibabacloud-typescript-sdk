// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of AINodes on which to deploy the model.
   * 
   * This parameter is required.
   */
  aiNodesShrink?: string;
  /**
   * @remarks
   * A token to ensure the idempotence of the request. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The description of the model service.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable a public network connection.
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
   * The model parameters. This parameter is not yet supported.
   * 
   * @example
   * Not yet available.
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
   * The ID of the resource group to which the instance belongs. For more information about how to obtain the ID of a resource group, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP whitelist.
   * 
   * Set this parameter to `127.0.0.1` to deny access from all external IP addresses. After the model service is created, you can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP whitelist.
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

