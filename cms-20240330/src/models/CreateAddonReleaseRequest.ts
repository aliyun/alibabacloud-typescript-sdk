// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class CreateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on component to be integrated for monitoring.
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
   * @example
   * v2
   */
  apiVersion?: string;
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
   * The environment type. If the policy type is CS or ECS, the corresponding environment type is used. For other policy types, the value is uniformly set to Cloud.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * The parent add-on release ID.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The name of the plug-in after integration. If you do not specify this parameter, a default rule name is generated.
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
   * The version of the add-on component to be integrated for monitoring.
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
      apiVersion: 'apiVersion',
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
      apiVersion: 'string',
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

