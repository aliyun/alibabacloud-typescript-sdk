// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class GetAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
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
   * Details.
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
   * True
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

export class GetAddonReleaseResponseBodyRelease extends $dara.Model {
  /**
   * @remarks
   * Addon component name.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * Number of alert rules.
   * 
   * @example
   * 6
   */
  alertRuleCount?: number;
  /**
   * @remarks
   * Installation phase information.
   */
  conditions?: GetAddonReleaseResponseBodyReleaseConditions[];
  /**
   * @remarks
   * Component configuration information.
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
   * 2024-11-04T16:10:12+08:00
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
   * Whether there is a configuration.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * User ID for connection.
   * 
   * @example
   * 1707xxxxxxxxxxxx
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
   * Parent AddonRelease ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxx
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
   * Release ID.
   * 
   * @example
   * 7339d808-66f9-4d40-83fa-xxxxxxxxxxx
   */
  releaseId?: string;
  /**
   * @remarks
   * The name of the Release.
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
   * container
   */
  scene?: string;
  /**
   * @remarks
   * Component status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-11-04T16:10:12+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Owner user ID.
   * 
   * @example
   * 1707xxxxxxxxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Component version.
   * 
   * @example
   * 0.0.2
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
   * @remarks
   * Component configuration.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @remarks
   * Detailed information.
   */
  release?: GetAddonReleaseResponseBodyRelease;
  /**
   * @remarks
   * Request ID.
   * 
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

