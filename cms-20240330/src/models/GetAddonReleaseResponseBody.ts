// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class GetAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
  /**
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  firstTransitionTime?: string;
  /**
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  lastTransitionTime?: string;
  /**
   * @example
   * The addon loaded successfully
   */
  message?: string;
  /**
   * @example
   * True
   */
  status?: string;
  /**
   * @example
   * Loaded
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      firstTransitionTime: 'firstTransitionTime',
      lastTransitionTime: 'lastTransitionTime',
      message: 'message',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTransitionTime: 'string',
      lastTransitionTime: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonReleaseResponseBodyRelease extends $dara.Model {
  /**
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @example
   * 6
   */
  alertRuleCount?: number;
  conditions?: GetAddonReleaseResponseBodyReleaseConditions[];
  /**
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @example
   * 2024-11-04T16:10:12+08:00
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  dashboardCount?: number;
  entityRules?: EntityGroupBase;
  /**
   * @example
   * CS
   */
  envType?: string;
  /**
   * @example
   * policy-xxxxxxxxxxx
   */
  environmentId?: string;
  /**
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @example
   * 1707xxxxxxxxxxxx
   */
  installUserId?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * true
   */
  managed?: boolean;
  /**
   * @example
   * policy-xxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @example
   * policy-xxxxxxxxxxxxx
   */
  policyId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Release ID。
   * 
   * @example
   * 7339d808-66f9-4d40-83fa-xxxxxxxxxxx
   */
  releaseId?: string;
  /**
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @example
   * container
   */
  scene?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 2024-11-04T16:10:12+08:00
   */
  updateTime?: string;
  /**
   * @example
   * 1707xxxxxxxxxxxx
   */
  userId?: string;
  /**
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
      alertRuleCount: 'alertRuleCount',
      conditions: 'conditions',
      config: 'config',
      createTime: 'createTime',
      dashboardCount: 'dashboardCount',
      entityRules: 'entityRules',
      envType: 'envType',
      environmentId: 'environmentId',
      exporterCount: 'exporterCount',
      haveConfig: 'haveConfig',
      installUserId: 'installUserId',
      language: 'language',
      managed: 'managed',
      parentAddonReleaseId: 'parentAddonReleaseId',
      policyId: 'policyId',
      regionId: 'regionId',
      releaseId: 'releaseId',
      releaseName: 'releaseName',
      scene: 'scene',
      status: 'status',
      updateTime: 'updateTime',
      userId: 'userId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      alertRuleCount: 'number',
      conditions: { 'type': 'array', 'itemType': GetAddonReleaseResponseBodyReleaseConditions },
      config: 'string',
      createTime: 'string',
      dashboardCount: 'number',
      entityRules: EntityGroupBase,
      envType: 'string',
      environmentId: 'string',
      exporterCount: 'number',
      haveConfig: 'boolean',
      installUserId: 'string',
      language: 'string',
      managed: 'boolean',
      parentAddonReleaseId: 'string',
      policyId: 'string',
      regionId: 'string',
      releaseId: 'string',
      releaseName: 'string',
      scene: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.entityRules && typeof (this.entityRules as any).validate === 'function') {
      (this.entityRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonReleaseResponseBody extends $dara.Model {
  /**
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  release?: GetAddonReleaseResponseBodyRelease;
  /**
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      release: 'release',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      release: GetAddonReleaseResponseBodyRelease,
      requestId: 'string',
    };
  }

  validate() {
    if(this.release && typeof (this.release as any).validate === 'function') {
      (this.release as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

