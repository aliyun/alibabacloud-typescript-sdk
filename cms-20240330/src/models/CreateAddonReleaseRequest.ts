// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class CreateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the addon component to be connected to monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * The language type of the component.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The field rules.
   */
  entityRules?: EntityDiscoverRule;
  /**
   * @remarks
   * The environment type. If the policy type is CS or ECS, the corresponding value is used. For other types, the value is Cloud.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * The parent AddonReleaseId.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The name of the plugin after access. If this parameter is not specified, a default rule name is generated.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @remarks
   * The input metadata.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  values?: string;
  /**
   * @remarks
   * The version of the addon component to be connected to monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace where the component resources are installed.
   * 
   * @example
   * default
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      aliyunLang: 'aliyunLang',
      dryRun: 'dryRun',
      entityRules: 'entityRules',
      envType: 'envType',
      parentAddonReleaseId: 'parentAddonReleaseId',
      releaseName: 'releaseName',
      values: 'values',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      aliyunLang: 'string',
      dryRun: 'boolean',
      entityRules: EntityDiscoverRule,
      envType: 'string',
      parentAddonReleaseId: 'string',
      releaseName: 'string',
      values: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.entityRules && typeof (this.entityRules as any).validate === 'function') {
      (this.entityRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

