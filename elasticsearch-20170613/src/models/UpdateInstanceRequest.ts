// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientNodeConfiguration } from "./ClientNodeConfiguration";
import { ElasticDataNodeConfiguration } from "./ElasticDataNodeConfiguration";
import { KibanaNodeConfiguration } from "./KibanaNodeConfiguration";
import { MasterNodeConfiguration } from "./MasterNodeConfiguration";
import { NodeSpec } from "./NodeSpec";
import { WarmNodeConfiguration } from "./WarmNodeConfiguration";


export class UpdateInstanceRequest extends $dara.Model {
  clientNodeConfiguration?: ClientNodeConfiguration;
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
  /**
   * @example
   * advanced
   */
  instanceCategory?: string;
  kibanaConfiguration?: KibanaNodeConfiguration;
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @example
   * 3
   */
  nodeAmount?: number;
  nodeSpec?: NodeSpec;
  updateType?: string;
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * upgrade
   */
  orderActionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientNodeConfiguration: 'clientNodeConfiguration',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      instanceCategory: 'instanceCategory',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
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
      instanceCategory: 'string',
      kibanaConfiguration: KibanaNodeConfiguration,
      masterConfiguration: MasterNodeConfiguration,
      nodeAmount: 'number',
      nodeSpec: NodeSpec,
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
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
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

