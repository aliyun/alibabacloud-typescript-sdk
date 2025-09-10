// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class CreateAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
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
   * {\\"phase\\": \\"Created\\", \\"executionDetails\\": [], \\"invocations\\": [], \\"latestExecError\\": {\\"message\\": \\"\\", \\"code\\": \\"\\", \\"requestId\\": \\"\\", \\"extraInfo\\": \\"\\", \\"title\\": \\"\\"}}
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

export class CreateAddonReleaseResponseBodyRelease extends $dara.Model {
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
  conditions?: CreateAddonReleaseResponseBodyReleaseConditions[];
  /**
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @example
   * 2024-11-05T15:21:30+08:00
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
   * 1654218965xxxxxx
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
   * policy-xxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @example
   * policy-xxxxxxxxxx
   */
  policyId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2e898e60-5e6a-46d1-a994-xxxxxxxxxx
   */
  releaseId?: string;
  /**
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @example
   * 1
   */
  scene?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * 2024-09-13T02:21:02Z
   */
  updateTime?: string;
  /**
   * @example
   * 165421896xxxxxx
   */
  userId?: string;
  /**
   * @example
   * 1.0.0
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
      conditions: { 'type': 'array', 'itemType': CreateAddonReleaseResponseBodyReleaseConditions },
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

export class CreateAddonReleaseResponseBody extends $dara.Model {
  release?: CreateAddonReleaseResponseBodyRelease;
  /**
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      release: 'release',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      release: CreateAddonReleaseResponseBodyRelease,
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

