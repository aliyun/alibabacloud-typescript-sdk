// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class CreateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The Addon name of the component that needs to be monitored.
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
   * Whether it is a dry run, default is false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Field rules
   */
  entityRules?: EntityDiscoverRule;
  /**
   * @remarks
   * Environment type. If the Policy type is CS and ECS, use accordingly; otherwise, it is unified as Cloud.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * Parent AddonReleaseId.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The plugin name after access. If not specified, a default rule name will be generated.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @remarks
   * Input metadata.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  values?: string;
  /**
   * @remarks
   * The version of the Addon component that needs to be monitored.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  version?: string;
  /**
   * @remarks
   * The workspace name for installing the component resources.
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

