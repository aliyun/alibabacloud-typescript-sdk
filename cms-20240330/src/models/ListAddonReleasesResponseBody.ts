// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class ListAddonReleasesResponseBodyReleasesConditions extends $dara.Model {
  /**
   * @remarks
   * The time of the first transition.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * The time of the last transition.
   * 
   * @example
   * 2024-11-04T16:10:22+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The detailed information.
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
   * True
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

export class ListAddonReleasesResponseBodyReleasesSubAddonRelease extends $dara.Model {
  /**
   * @remarks
   * The number of ready sub-releases.
   * 
   * @example
   * 2
   */
  ready?: number;
  /**
   * @remarks
   * The number of sub-releases.
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
   * The name of the add-on.
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
   * The version number.
   * 
   * @example
   * 2023-03-30
   */
  apiVersion?: string;
  /**
   * @remarks
   * The summary of installation phase conditions.
   */
  conditions?: ListAddonReleasesResponseBodyReleasesConditions[];
  /**
   * @remarks
   * The configuration information of the component.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @remarks
   * The onboarding time.
   * 
   * @example
   * 2024-11-04T16:10:12+08:00
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
   * The entity details.
   */
  entityRules?: EntityGroupBase;
  /**
   * @remarks
   * The type of the environment.
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
   * policy-xxxxxxxxxxxx
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
   * The ID of the onboarding user.
   * 
   * @example
   * 175xxxxxxxxx
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
   * Indicates whether the component is managed.
   * 
   * @example
   * true
   */
  managed?: boolean;
  /**
   * @remarks
   * The starting version number for the remaining list.
   * 
   * @example
   * None
   */
  nextVersion?: string;
  /**
   * @remarks
   * The parent add-on release ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxxx
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
   * The release ID.
   * 
   * @example
   * 7339d808-66f9-4d40-83fa-xxxxxxxxxxx
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
   * The scenario of the component.
   * 
   * @example
   * container
   */
  scene?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The statistics information of sub-add-on releases.
   */
  subAddonRelease?: ListAddonReleasesResponseBodyReleasesSubAddonRelease;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-11-04T16:10:23+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the owning user.
   * 
   * @example
   * 175xxxxxxxxxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 0.0.2
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
   * The next page token.
   */
  nextToken?: string;
  /**
   * @remarks
   * The collection of onboarded component information.
   */
  releases?: ListAddonReleasesResponseBodyReleases[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of components.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      releases: 'releases',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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

