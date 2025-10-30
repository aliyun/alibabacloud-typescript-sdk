// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsMetadata extends $dara.Model {
  /**
   * @remarks
   * Annotations
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * Resource labels
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * pod-1234567
   */
  name?: string;
  /**
   * @remarks
   * Namespace
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      labels: 'labels',
      name: 'name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsSpec extends $dara.Model {
  /**
   * @remarks
   * Instance ID, which can be specified if you need to pinpoint to the instance level. It depends on the data in EntityStore.
   * 
   * @example
   * es-xxxxx
   */
  entityId?: string;
  /**
   * @remarks
   * Prom Instance ID.
   * 
   * @example
   * i-bp122p85gthbniw8rsu9
   */
  instance?: string;
  /**
   * @remarks
   * Prom instance name
   * 
   * @example
   * category_predict
   */
  instanceName?: string;
  /**
   * @remarks
   * Optional parameter, determined based on the current environment type
   * 
   * @example
   * datagrid_cdm
   */
  project?: string;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Storage sharing scope: Environment | Region | Workspace | Custom
   * 
   * @example
   * Region
   */
  shareScope?: string;
  /**
   * @remarks
   * Instance storage type
   * 
   * @example
   * Prometheus
   */
  storageType?: string;
  /**
   * @remarks
   * Tags to be applied to the target storage (injected as system tags)
   */
  systemTags?: { [key: string]: string };
  /**
   * @remarks
   * Tags to be applied to the target storage (injected as regular tags)
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 12345678
   */
  userId?: string;
  /**
   * @remarks
   * Workspace
   * 
   * @example
   * test-api
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entityId',
      instance: 'instance',
      instanceName: 'instanceName',
      project: 'project',
      region: 'region',
      shareScope: 'shareScope',
      storageType: 'storageType',
      systemTags: 'systemTags',
      tags: 'tags',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      instance: 'string',
      instanceName: 'string',
      project: 'string',
      region: 'string',
      shareScope: 'string',
      storageType: 'string',
      systemTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.systemTags) {
      $dara.Model.validateMap(this.systemTags);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsStatus extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-uqm3ket1t0u
   */
  instanceId?: string;
  /**
   * @remarks
   * Internal URL
   * 
   * @example
   * http://192.168.xxxxxx
   */
  interUrl?: string;
  /**
   * @remarks
   * External URL
   * 
   * @example
   * http://100.100.xxxxxx
   */
  intraUrl?: string;
  /**
   * @remarks
   * 存储需求名称
   * 
   * @example
   * sr-xxxx
   */
  name?: string;
  /**
   * @remarks
   * 存储需求项目
   * 
   * @example
   * jiuwu_algo
   */
  project?: string;
  /**
   * @remarks
   * Prom\\"s metric center
   * 
   * @example
   * xxxx
   */
  promMetricStore?: string;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Instance storage type
   * 
   * @example
   * Prometheus
   */
  storageType?: string;
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
      instanceId: 'instanceId',
      interUrl: 'interUrl',
      intraUrl: 'intraUrl',
      name: 'name',
      project: 'project',
      promMetricStore: 'promMetricStore',
      region: 'region',
      storageType: 'storageType',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interUrl: 'string',
      intraUrl: 'string',
      name: 'string',
      project: 'string',
      promMetricStore: 'string',
      region: 'string',
      storageType: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirements extends $dara.Model {
  /**
   * @remarks
   * Collection of AddonReleases.
   */
  addonReleaseNames?: string[];
  /**
   * @remarks
   * API Version
   * 
   * @example
   * v1
   */
  apiVersion?: string;
  /**
   * @remarks
   * Resource kind
   * 
   * @example
   * Pod
   */
  kind?: string;
  /**
   * @remarks
   * Metadata
   */
  metadata?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsMetadata;
  /**
   * @remarks
   * Resource spec
   */
  spec?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsSpec;
  /**
   * @remarks
   * Storage requirement status
   */
  status?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsStatus;
  static names(): { [key: string]: string } {
    return {
      addonReleaseNames: 'addonReleaseNames',
      apiVersion: 'apiVersion',
      kind: 'kind',
      metadata: 'metadata',
      spec: 'spec',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonReleaseNames: { 'type': 'array', 'itemType': 'string' },
      apiVersion: 'string',
      kind: 'string',
      metadata: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsMetadata,
      spec: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsSpec,
      status: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsStatus,
    };
  }

  validate() {
    if(Array.isArray(this.addonReleaseNames)) {
      $dara.Model.validateArray(this.addonReleaseNames);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyStorageRequirementsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * List of storage requirements
   */
  storageRequirements?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirements[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      storageRequirements: 'storageRequirements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageRequirements: { 'type': 'array', 'itemType': ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirements },
    };
  }

  validate() {
    if(Array.isArray(this.storageRequirements)) {
      $dara.Model.validateArray(this.storageRequirements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

