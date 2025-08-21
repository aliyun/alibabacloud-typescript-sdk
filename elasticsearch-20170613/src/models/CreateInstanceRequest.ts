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
  tagKey?: string;
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
  clientNodeConfiguration?: ClientNodeConfiguration;
  /**
   * @example
   * es
   */
  description?: string;
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es_password
   */
  esAdminPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @example
   * advanced
   */
  instanceCategory?: string;
  kibanaConfiguration?: KibanaNodeConfiguration;
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfig?: NetworkConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  nodeAmount?: number;
  nodeSpec?: NodeSpec;
  paymentInfo?: PaymentInfo;
  /**
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @example
   * rg-aekzu7tsu4nem4q
   */
  resourceGroupId?: string;
  tags?: CreateInstanceRequestTags[];
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @example
   * 2
   */
  zoneCount?: number;
  /**
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

