// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceModuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * 二级模块标识
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud:customField
   */
  featureKey?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 一级模块标识，必填
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud
   */
  moduleKey?: string;
  /**
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

