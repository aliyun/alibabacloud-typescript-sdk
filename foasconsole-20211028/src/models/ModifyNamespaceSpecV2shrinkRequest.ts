// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNamespaceSpecV2ShrinkRequest extends $dara.Model {
  elasticResourceSpecShrink?: string;
  guaranteedResourceSpecShrink?: string;
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

