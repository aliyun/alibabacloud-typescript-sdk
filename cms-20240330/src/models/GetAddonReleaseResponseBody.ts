// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityGroupBase } from "./EntityGroupBase";


export class GetAddonReleaseResponseBodyReleaseConditions extends $dara.Model {
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
   * The detailed message.
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

export class GetAddonReleaseResponseBodyRelease extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on component.
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
   * Information about the installation phases.
   */
  conditions?: GetAddonReleaseResponseBodyReleaseConditions[];
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
   * The time when the add-on was accessed.
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
   * The details of the entity.
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
   * The ID of the environment.
   * 
   * @example
   * policy-xxxxxxxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The number of plug-ins.
   * 
   * @example
   * 2
   */
  exporterCount?: number;
  /**
   * @remarks
   * Indicates whether a configuration exists.
   * 
   * @example
   * true
   */
  haveConfig?: boolean;
  /**
   * @remarks
   * The ID of the user who accessed the add-on.
   * 
   * @example
   * 1707xxxxxxxxxxxx
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
   * Indicates whether the component is a managed component.
   * 
   * @example
   * true
   */
  managed?: boolean;
  /**
   * @remarks
   * The ID of the parent add-on release.
   * 
   * @example
   * policy-xxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * policy-xxxxxxxxxxxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * The status of the component.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the release was last updated.
   * 
   * @example
   * 2024-11-04T16:10:12+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user to which the release belongs.
   * 
   * @example
   * 1707xxxxxxxxxxxx
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
   * The configuration of the component.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  config?: string;
  /**
   * @remarks
   * The details of the release.
   */
  release?: GetAddonReleaseResponseBodyRelease;
  /**
   * @remarks
   * The ID of the request.
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

