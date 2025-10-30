// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class CreateAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
  /**
   * @remarks
   * First transition time.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * Last transition time.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * Detailed information.
   * 
   * @example
   * The addon loaded successfully
   */
  message?: string;
  /**
   * @remarks
   * Phase status.
   * 
   * @example
   * {\\"phase\\": \\"Created\\", \\"executionDetails\\": [], \\"invocations\\": [], \\"latestExecError\\": {\\"message\\": \\"\\", \\"code\\": \\"\\", \\"requestId\\": \\"\\", \\"extraInfo\\": \\"\\", \\"title\\": \\"\\"}}
   */
  status?: string;
  /**
   * @remarks
   * Phase type.
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
   * The Addon name of the component being monitored.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * Number of alert groups.
   * 
   * @example
   * 6
   */
  alertRuleCount?: number;
  /**
   * @remarks
   * Component installation phase information.
   */
  conditions?: CreateAddonReleaseResponseBodyReleaseConditions[];
  /**
   * @remarks
   * Component configuration.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @remarks
   * Connection time.
   * 
   * @example
   * 2024-11-05T15:21:30+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * Number of dashboards.
   * 
   * @example
   * 3
   */
  dashboardCount?: number;
  /**
   * @remarks
   * Entity details.
   */
  entityRules?: EntityGroupBase;
  /**
   * @remarks
   * Environment type.
   * 
   * @example
   * CS
   */
  envType?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * Number of plugins.
   * 
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @remarks
   * Whether it has configuration.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * ID of the user who installed it.
   * 
   * @example
   * 1654218965xxxxxx
   */
  installUserId?: string;
  /**
   * @remarks
   * Language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * Whether it is a managed component.
   * 
   * @example
   * true
   */
  managed?: boolean;
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
   * Policy environment ID.
   * 
   * @example
   * policy-xxxxxxxxxx
   */
  policyId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * ReleaseID after installation.
   * 
   * @example
   * 2e898e60-5e6a-46d1-a994-xxxxxxxxxx
   */
  releaseId?: string;
  /**
   * @remarks
   * Name of the Release.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  /**
   * @remarks
   * Component scenario.
   * 
   * @example
   * 1
   */
  scene?: string;
  /**
   * @remarks
   * Component status.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-09-13T02:21:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * ID of the owner user.
   * 
   * @example
   * 165421896xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Component version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * Workspace.
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
   * Accessed component information.
   */
  release?: CreateAddonReleaseResponseBodyRelease;
  /**
   * @remarks
   * Request ID.
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

