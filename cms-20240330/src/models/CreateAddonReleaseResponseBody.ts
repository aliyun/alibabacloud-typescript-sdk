// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class CreateAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
  /**
   * @remarks
   * The time when the phase first transitioned.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * The time when the phase last transitioned.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The details of the phase.
   * 
   * @example
   * The addon loaded successfully
   */
  message?: string;
  /**
   * @remarks
   * The status of the phase.
   * 
   * @example
   * {\\"phase\\": \\"Created\\", \\"executionDetails\\": [], \\"invocations\\": [], \\"latestExecError\\": {\\"message\\": \\"\\", \\"code\\": \\"\\", \\"requestId\\": \\"\\", \\"extraInfo\\": \\"\\", \\"title\\": \\"\\"}}
   */
  status?: string;
  /**
   * @remarks
   * The type of the phase.
   * 
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
   * @remarks
   * The name of the integrated add-on.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * The number of alert rules.
   * 
   * @example
   * 6
   */
  alertRuleCount?: number;
  /**
   * @remarks
   * The information about the add-on installation phases.
   */
  conditions?: CreateAddonReleaseResponseBodyReleaseConditions[];
  /**
   * @remarks
   * The configuration of the add-on.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @remarks
   * The time when the add-on was integrated.
   * 
   * @example
   * 2024-11-05T15:21:30+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The number of dashboards.
   * 
   * @example
   * 3
   */
  dashboardCount?: number;
  /**
   * @remarks
   * The details of the entity.
   */
  entityRules?: EntityGroupBase;
  /**
   * @remarks
   * The environment type.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The number of exporters.
   * 
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @remarks
   * Indicates whether a configuration is available.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * The ID of the user who installed the add-on.
   * 
   * @example
   * 1654218965xxxxxx
   */
  installUserId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * Indicates whether the add-on is a managed add-on.
   * 
   * @example
   * true
   */
  managed?: boolean;
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
   * The ID of the environment policy.
   * 
   * @example
   * policy-xxxxxxxxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the release.
   * 
   * @example
   * 2e898e60-5e6a-46d1-a994-xxxxxxxxxx
   */
  releaseId?: string;
  /**
   * @remarks
   * The name of the release.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @remarks
   * The scenario of the add-on.
   * 
   * @example
   * 1
   */
  scene?: string;
  /**
   * @remarks
   * The status of the add-on.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The time when the add-on was last updated.
   * 
   * @example
   * 2024-09-13T02:21:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 165421896xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The workspace.
   * 
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
  /**
   * @remarks
   * The information about the integrated add-on.
   */
  release?: CreateAddonReleaseResponseBodyRelease;
  /**
   * @remarks
   * The request ID.
   * 
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

