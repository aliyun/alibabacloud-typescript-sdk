// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientNodeConfiguration } from "./ClientNodeConfiguration";
import { ElasticDataNodeConfiguration } from "./ElasticDataNodeConfiguration";
import { IndexNodeConfiguration } from "./IndexNodeConfiguration";
import { KibanaNodeConfiguration } from "./KibanaNodeConfiguration";
import { MasterNodeConfiguration } from "./MasterNodeConfiguration";
import { NetworkConfig } from "./NetworkConfig";
import { NodeSpec } from "./NodeSpec";
import { PaymentInfo } from "./PaymentInfo";
import { SearchNodeConfiguration } from "./SearchNodeConfiguration";
import { WarmNodeConfiguration } from "./WarmNodeConfiguration";


export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The access password of the instance. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include !@#$%^&*()_+-=.
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
   * > The preceding versions may not include all versions supported by Elasticsearch instances. To view the actual supported versions, call the [GetRegionConfiguration](https://help.aliyun.com/document_detail/254099.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The index node configuration. Only instances with the AI engine type support index node configuration.
   */
  indexNodeConfiguration?: IndexNodeConfiguration;
  /**
   * @remarks
   * The edition type. Valid values:
   * - x-pack: Creates a Commercial Edition instance, or an Advanced Edition instance with Indexing Service and OpenStore disabled.
   * - IS: Creates an Advanced Edition instance with Indexing Service or OpenStore enabled.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The Kibana node configuration.
   * 
   * > Enable the Kibana node.
   */
  kibanaConfiguration?: KibanaNodeConfiguration;
  /**
   * @remarks
   * The dedicated master node configuration.
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you call the createInstance operation to create an instance with a new-generation cloud disk-based dedicated master node, you must specify the instance family with the `.new` suffix, such as elasticsearch.sn1ne.large.new.
   */
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * The network configuration.
   * 
   * > You cannot specify an IP address whitelist when you create an instance.
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
   * > In the Beijing, Shanghai, Hangzhou, and Shenzhen regions, when you call the createInstance operation to create an instance with a new-generation cloud disk-based data node, you must specify the instance family with the `.new` suffix, such as elasticsearch.sn1ne.large.new.
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
   * - postpaid: pay-as-you-go billing method
   * - prepaid: subscription
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
   * The query node configuration. Only instances with the AI engine type support query node configuration.
   */
  searchNodeConfiguration?: SearchNodeConfiguration;
  /**
   * @remarks
   * The instance label group.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * The warm data node configuration.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
      indexNodeConfiguration: 'indexNodeConfiguration',
      instanceCategory: 'instanceCategory',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentInfo: 'paymentInfo',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      searchNodeConfiguration: 'searchNodeConfiguration',
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
      indexNodeConfiguration: IndexNodeConfiguration,
      instanceCategory: 'string',
      kibanaConfiguration: KibanaNodeConfiguration,
      masterConfiguration: MasterNodeConfiguration,
      networkConfig: NetworkConfig,
      nodeAmount: 'number',
      nodeSpec: NodeSpec,
      paymentInfo: PaymentInfo,
      paymentType: 'string',
      resourceGroupId: 'string',
      searchNodeConfiguration: SearchNodeConfiguration,
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
    if(this.indexNodeConfiguration && typeof (this.indexNodeConfiguration as any).validate === 'function') {
      (this.indexNodeConfiguration as any).validate();
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
    if(this.searchNodeConfiguration && typeof (this.searchNodeConfiguration as any).validate === 'function') {
      (this.searchNodeConfiguration as any).validate();
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

