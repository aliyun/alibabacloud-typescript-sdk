// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNamespaceSpecV2RequestElasticResourceSpec } from "./ModifyNamespaceSpecV2requestElasticResourceSpec";
import { ModifyNamespaceSpecV2RequestGuaranteedResourceSpec } from "./ModifyNamespaceSpecV2requestGuaranteedResourceSpec";


export class ModifyNamespaceSpecV2Request extends $dara.Model {
  elasticResourceSpec?: ModifyNamespaceSpecV2RequestElasticResourceSpec;
  guaranteedResourceSpec?: ModifyNamespaceSpecV2RequestGuaranteedResourceSpec;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  ha?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * di-593439443804417
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      elasticResourceSpec: 'ElasticResourceSpec',
      guaranteedResourceSpec: 'GuaranteedResourceSpec',
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticResourceSpec: ModifyNamespaceSpecV2RequestElasticResourceSpec,
      guaranteedResourceSpec: ModifyNamespaceSpecV2RequestGuaranteedResourceSpec,
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    if(this.elasticResourceSpec && typeof (this.elasticResourceSpec as any).validate === 'function') {
      (this.elasticResourceSpec as any).validate();
    }
    if(this.guaranteedResourceSpec && typeof (this.guaranteedResourceSpec as any).validate === 'function') {
      (this.guaranteedResourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

