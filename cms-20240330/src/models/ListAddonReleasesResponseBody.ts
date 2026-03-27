// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class ListAddonReleasesResponseBodyReleasesConditions extends $dara.Model {
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

export class ListAddonReleasesResponseBodyReleasesSubAddonRelease extends $dara.Model {
  /**
   * @remarks
   * Number of ready sub-Releases.
   * 
   * @example
   * 2
   */
  ready?: number;
  /**
   * @remarks
   * Number of sub-Releases.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ready: 'ready',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ready: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonReleasesResponseBodyReleases extends $dara.Model {
  /**
   * @remarks
   * Addon name.
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
   * API version.
   * 
   * @example
   * 2023-03-30
   */
  apiVersion?: string;
  /**
   * @remarks
   * Installation phase information.
   */
  conditions?: ListAddonReleasesResponseBodyReleasesConditions[];
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
   * Access time.
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
   * policy-xxxxxxxxxxxx
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
   * Access user ID.
   * 
   * @example
   * 175xxxxxxxxx
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
   * Starting version number for the remaining list.
   * 
   * @example
   * None
   */
  nextVersion?: string;
  /**
   * @remarks
   * Parent AddonReleaseId.
   * 
   * @example
   * policy-xxxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxxx
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
   * Release name.
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
   * Status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * Sub-AddonRelease statistics.
   */
  subAddonRelease?: ListAddonReleasesResponseBodyReleasesSubAddonRelease;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-11-04T16:10:23+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Owner user ID.
   * 
   * @example
   * 175xxxxxxxxxxxxx
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
      apiVersion: 'apiVersion',
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
      nextVersion: 'nextVersion',
      parentAddonReleaseId: 'parentAddonReleaseId',
      policyId: 'policyId',
      regionId: 'regionId',
      releaseId: 'releaseId',
      releaseName: 'releaseName',
      scene: 'scene',
      status: 'status',
      subAddonRelease: 'subAddonRelease',
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
      apiVersion: 'string',
      conditions: { 'type': 'array', 'itemType': ListAddonReleasesResponseBodyReleasesConditions },
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
      nextVersion: 'string',
      parentAddonReleaseId: 'string',
      policyId: 'string',
      regionId: 'string',
      releaseId: 'string',
      releaseName: 'string',
      scene: 'string',
      status: 'string',
      subAddonRelease: ListAddonReleasesResponseBodyReleasesSubAddonRelease,
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
    if(this.subAddonRelease && typeof (this.subAddonRelease as any).validate === 'function') {
      (this.subAddonRelease as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Set of add-on component information.
   */
  releases?: ListAddonReleasesResponseBodyReleases[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @remarks
   * Number of components.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      releases: 'releases',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releases: { 'type': 'array', 'itemType': ListAddonReleasesResponseBodyReleases },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.releases)) {
      $dara.Model.validateArray(this.releases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

