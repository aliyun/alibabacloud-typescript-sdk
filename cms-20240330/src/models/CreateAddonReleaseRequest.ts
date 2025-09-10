// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class CreateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  entityRules?: EntityDiscoverRule;
  /**
   * @example
   * CS
   */
  envType?: string;
  /**
   * @example
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  values?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  version?: string;
  /**
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

