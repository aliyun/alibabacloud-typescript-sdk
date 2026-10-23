// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientNodeConfiguration } from "./ClientNodeConfiguration";
import { ElasticDataNodeConfiguration } from "./ElasticDataNodeConfiguration";
import { IndexNodeConfiguration } from "./IndexNodeConfiguration";
import { KibanaNodeConfiguration } from "./KibanaNodeConfiguration";
import { MasterNodeConfiguration } from "./MasterNodeConfiguration";
import { NodeSpec } from "./NodeSpec";
import { SearchNodeConfiguration } from "./SearchNodeConfiguration";
import { WarmNodeConfiguration } from "./WarmNodeConfiguration";


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client node configuration.
   */
  clientNodeConfiguration?: ClientNodeConfiguration;
  /**
   * @remarks
   * The elastic node configuration.
   */
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
  /**
   * @remarks
   * The index node configuration. This parameter is supported only by AI engine instances.
   */
  indexNodeConfiguration?: IndexNodeConfiguration;
  /**
   * @remarks
   * The edition type. Valid values:
   * 
   * - x-pack: Commercial Edition.
   * - advanced: Advanced Edition.
   * - IS: Advanced Edition with Indexing Service enabled.
   * - community: Basic Edition.
   * > To create an Advanced Edition instance with OpenStore enabled, you must also enable Indexing Service.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The Kibana node configuration.
   */
  kibanaConfiguration?: KibanaNodeConfiguration;
  /**
   * @remarks
   * The dedicated master node configuration.
   */
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The data node configuration.
   */
  nodeSpec?: NodeSpec;
  /**
   * @remarks
   * The search node configuration. This parameter is supported only by AI engine instances.
   */
  searchNodeConfiguration?: SearchNodeConfiguration;
  /**
   * @remarks
   * The update type. Valid values:
   * - normal: In-place update.
   * - blue_green: Blue-green update.
   * 
   * @example
   * blue_green
   */
  updateType?: string;
  /**
   * @remarks
   * The warm data node configuration.
   */
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to force a restart. Valid values:
   * 
   * - true: Yes.
   * - false: No. This is the default value.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The configuration change type. Valid values:
   * 
   * - upgrade: Upgrades the configuration. This is the default value.
   * - downgrade: Downgrades the configuration.
   * 
   * @example
   * upgrade
   */
  orderActionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientNodeConfiguration: 'clientNodeConfiguration',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      indexNodeConfiguration: 'indexNodeConfiguration',
      instanceCategory: 'instanceCategory',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      searchNodeConfiguration: 'searchNodeConfiguration',
      updateType: 'updateType',
      warmNodeConfiguration: 'warmNodeConfiguration',
      clientToken: 'clientToken',
      force: 'force',
      orderActionType: 'orderActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeConfiguration: ClientNodeConfiguration,
      elasticDataNodeConfiguration: ElasticDataNodeConfiguration,
      indexNodeConfiguration: IndexNodeConfiguration,
      instanceCategory: 'string',
      kibanaConfiguration: KibanaNodeConfiguration,
      masterConfiguration: MasterNodeConfiguration,
      nodeAmount: 'number',
      nodeSpec: NodeSpec,
      searchNodeConfiguration: SearchNodeConfiguration,
      updateType: 'string',
      warmNodeConfiguration: WarmNodeConfiguration,
      clientToken: 'string',
      force: 'boolean',
      orderActionType: 'string',
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
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(this.searchNodeConfiguration && typeof (this.searchNodeConfiguration as any).validate === 'function') {
      (this.searchNodeConfiguration as any).validate();
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

