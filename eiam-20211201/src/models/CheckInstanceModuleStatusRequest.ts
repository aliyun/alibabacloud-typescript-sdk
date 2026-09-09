// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceModuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The level-2 module identifier.
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
   * The level-1 module identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud
   */
  moduleKey?: string;
  /**
   * @remarks
   * The resource label URN key.
   * 
   * @example
   * urn:alibaba:idaas:license:label:template:app
   */
  resourceLabelKey?: string;
  /**
   * @remarks
   * The resource label name.
   * 
   * @example
   * apt_ram_user_sso
   */
  resourceLabelValue?: string;
  /**
   * @remarks
   * The level-3 module identifier.
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
      resourceLabelKey: 'ResourceLabelKey',
      resourceLabelValue: 'ResourceLabelValue',
      subFeatureKey: 'SubFeatureKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureKey: 'string',
      instanceId: 'string',
      moduleKey: 'string',
      resourceLabelKey: 'string',
      resourceLabelValue: 'string',
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

