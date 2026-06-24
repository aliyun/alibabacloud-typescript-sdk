// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientNodeConfiguration } from "./ClientNodeConfiguration";
import { ElasticDataNodeConfiguration } from "./ElasticDataNodeConfiguration";
import { KibanaNodeConfiguration } from "./KibanaNodeConfiguration";
import { MasterNodeConfiguration } from "./MasterNodeConfiguration";
import { NetworkConfig } from "./NetworkConfig";
import { NodeSpec } from "./NodeSpec";
import { PaymentInfo } from "./PaymentInfo";
import { WarmNodeConfiguration } from "./WarmNodeConfiguration";


export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * KeyValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Coordinating node configuration.
   */
  clientNodeConfiguration?: ClientNodeConfiguration;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * es
   */
  description?: string;
  /**
   * @remarks
   * Elastic node configuration.
   */
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
  /**
   * @remarks
   * The access password of the instance. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (!@#$%^&*()_+-=). The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Es_password
   */
  esAdminPassword?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * - 8.5.1_with_X-Pack
   * - 7.10_with_X-Pack
   * - 6.7_with_X-Pack
   * - 7.7_with_X-Pack
   * - 6.8_with_X-Pack
   * - 6.3_with_X-Pack
   * - 5.6_with_X-Pack
   * - 5.5.3_with_X-Pack
   * 
   * > The versions listed above may not include all versions supported by Elasticsearch instances. You can call the [GetRegionConfiguration](https://help.aliyun.com/document_detail/254099.html) operation to view the actually supported versions.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The edition type:
   * - x-pack: creates a commercial edition instance, or a kernel-enhanced edition instance without Indexing Service or OpenStore enabled.
   * - IS: creates a kernel-enhanced edition instance with Indexing Service or OpenStore enabled.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * Kibana node configuration.
   * 
   * > We strongly recommend that you enable the Kibana node.
   */
  kibanaConfiguration?: KibanaNodeConfiguration;
  /**
   * @remarks
   * Dedicated master node configuration.
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you use createInstance to create an instance with next-generation cloud disk dedicated master nodes, you must specify the instance family with the `.new` suffix, for example, elasticsearch.sn1ne.large.new.
   */
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * Network configuration.
   * 
   * > Specifying IP whitelists is not supported when creating an instance.
   * 
   * This parameter is required.
   */
  networkConfig?: NetworkConfig;
  /**
   * @remarks
   * The number of data nodes. Valid values: 2 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  nodeAmount?: number;
  /**
   * @remarks
   * Data node configuration.
   * 
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you use createInstance to create an instance with next-generation cloud disk data nodes, you must specify the instance family with the `.new` suffix, for example, elasticsearch.sn1ne.large.new.
   */
  nodeSpec?: NodeSpec;
  /**
   * @remarks
   * The billing details of the subscription instance. This parameter is required when you create a subscription instance.
   */
  paymentInfo?: PaymentInfo;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - postpaid: pay-as-you-go.
   * - prepaid: subscription.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzu7tsu4n****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance tags.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * Cold data node configuration.
   */
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @remarks
   * The number of zones for the instance. Valid values: 1, 2, and 3. Default value: 1.
   * 
   * @example
   * 2
   */
  zoneCount?: number;
  /**
   * @remarks
   * Used to ensure the idempotency of the request. The parameter value is generated by the client and must be unique across different requests. The value cannot exceed 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientNodeConfiguration: 'clientNodeConfiguration',
      description: 'description',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      esAdminPassword: 'esAdminPassword',
      esVersion: 'esVersion',
      instanceCategory: 'instanceCategory',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentInfo: 'paymentInfo',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      warmNodeConfiguration: 'warmNodeConfiguration',
      zoneCount: 'zoneCount',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeConfiguration: ClientNodeConfiguration,
      description: 'string',
      elasticDataNodeConfiguration: ElasticDataNodeConfiguration,
      esAdminPassword: 'string',
      esVersion: 'string',
      instanceCategory: 'string',
      kibanaConfiguration: KibanaNodeConfiguration,
      masterConfiguration: MasterNodeConfiguration,
      networkConfig: NetworkConfig,
      nodeAmount: 'number',
      nodeSpec: NodeSpec,
      paymentInfo: PaymentInfo,
      paymentType: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
      warmNodeConfiguration: WarmNodeConfiguration,
      zoneCount: 'number',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.clientNodeConfiguration && typeof (this.clientNodeConfiguration as any).validate === 'function') {
      (this.clientNodeConfiguration as any).validate();
    }
    if(this.elasticDataNodeConfiguration && typeof (this.elasticDataNodeConfiguration as any).validate === 'function') {
      (this.elasticDataNodeConfiguration as any).validate();
    }
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(this.paymentInfo && typeof (this.paymentInfo as any).validate === 'function') {
      (this.paymentInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.warmNodeConfiguration && typeof (this.warmNodeConfiguration as any).validate === 'function') {
      (this.warmNodeConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

