// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNamespaceSpecV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The upper limit of pay-as-you-go resources allocated to the project namespace.
   */
  elasticResourceSpecShrink?: string;
  /**
   * @remarks
   * The size of subscription resources allocated to the project namespace.
   */
  guaranteedResourceSpecShrink?: string;
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
      elasticResourceSpecShrink: 'ElasticResourceSpec',
      guaranteedResourceSpecShrink: 'GuaranteedResourceSpec',
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticResourceSpecShrink: 'string',
      guaranteedResourceSpecShrink: 'string',
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

