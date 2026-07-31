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
   * The client node configuration.
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
   * The elastic node configuration.
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
   * > The versions listed above may not include all versions supported by Elasticsearch instances. Call the [GetRegionConfiguration](https://help.aliyun.com/document_detail/254099.html) operation to view the actual supported versions.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The edition type. Valid values:
   * - x-pack: creates a commercial edition instance, or a kernel-enhanced edition instance without Indexing Service or OpenStore enabled.
   * - IS: creates a kernel-enhanced edition instance with Indexing Service or OpenStore enabled.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The Kibana node configuration.
   * 
   * > We strongly recommend that you enable Kibana nodes.
   */
  kibanaConfiguration?: KibanaNodeConfiguration;
  /**
   * @remarks
   * The dedicated master node configuration.
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you call createInstance to create an instance with next-generation cloud disk-based dedicated master nodes, specify the instance family with the `.new` suffix. Example: elasticsearch.sn1ne.large.new.
   */
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * The network configuration.
   * 
   * > You cannot specify an IP whitelist when creating an instance.
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
   * The data node configuration.
   * 
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you call createInstance to create an instance with next-generation cloud disk-based data nodes, specify the instance family with the `.new` suffix. Example: elasticsearch.sn1ne.large.new.
   */
  nodeSpec?: NodeSpec;
  /**
   * @remarks
   * The payment details of the subscription instance. This parameter is required when you create a subscription instance.
   */
  paymentInfo?: PaymentInfo;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - postpaid: pay-as-you-go billing method.
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
   * The instance tags.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * The warm node configuration. Warm nodes are used to store cold data that is migrated from data nodes.
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
   * A client token that is used to ensure the idempotence of the request. The value is generated by the client and must be unique among different requests. The maximum length is 64 ASCII characters.
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

