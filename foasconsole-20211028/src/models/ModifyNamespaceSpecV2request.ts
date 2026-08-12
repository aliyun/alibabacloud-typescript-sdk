// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNamespaceSpecV2RequestElasticResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be 4 times the number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 52
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNamespaceSpecV2RequestGuaranteedResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be 4 times the number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNamespaceSpecV2Request extends $dara.Model {
  /**
   * @remarks
   * The upper limit of pay-as-you-go resources allocated to the project namespace.
   */
  elasticResourceSpec?: ModifyNamespaceSpecV2RequestElasticResourceSpec;
  /**
   * @remarks
   * The size of subscription resources allocated to the project namespace.
   */
  guaranteedResourceSpec?: ModifyNamespaceSpecV2RequestGuaranteedResourceSpec;
  /**
   * @remarks
   * Specifies whether the project namespace uses zone-disaster recovery.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  ha?: boolean;
  /**
   * @remarks
   * The order instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * di-5934394438****
   */
  namespace?: string;
  /**
   * @remarks
   * The region.
   * 
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

