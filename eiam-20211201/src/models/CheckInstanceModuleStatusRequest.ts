// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceModuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier for the secondary module.
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud:customField
   */
  featureKey?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The identifier for the primary module.
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud
   */
  moduleKey?: string;
  /**
   * @remarks
   * The identifier for the tertiary module.
   * 
   * @example
   * urn:alibaba:idaas:license:module:idp:alibaba:dingtalk:pull:advanced_configuration
   */
  subFeatureKey?: string;
  static names(): { [key: string]: string } {
    return {
      featureKey: 'FeatureKey',
      instanceId: 'InstanceId',
      moduleKey: 'ModuleKey',
      subFeatureKey: 'SubFeatureKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureKey: 'string',
      instanceId: 'string',
      moduleKey: 'string',
      subFeatureKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

