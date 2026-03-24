// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class CreateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on to integrate.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * The language of the add-on.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The default value is false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The entity discovery rules.
   */
  entityRules?: EntityDiscoverRule;
  /**
   * @remarks
   * The environment type. Set this parameter to CS for container environments or ECS for ECS environments. For all other environment types, set this parameter to Cloud.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the parent AddonRelease.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The name of the release after the integration. If you do not specify this parameter, a default name is generated.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  values?: string;
  /**
   * @remarks
   * The version of the add-on to integrate.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace where the add-on is installed.
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

