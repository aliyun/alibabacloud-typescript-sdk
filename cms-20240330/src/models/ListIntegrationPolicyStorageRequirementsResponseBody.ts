// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsMetadata extends $dara.Model {
  /**
   * @remarks
   * The annotations.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The resource labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * pod-1234567
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
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
   * The instance ID. Specify this parameter to query data at the instance level. This parameter depends on data in EntityStore.
   * 
   * @example
   * es-xxxxx
   */
  entityId?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * i-bp122p85gthbniw8rsu9
   */
  instance?: string;
  /**
   * @remarks
   * The name of the Prometheus instance.
   * 
   * @example
   * category_predict
   */
  instanceName?: string;
  /**
   * @remarks
   * Optional. The project is determined based on the current environment type.
   * 
   * @example
   * datagrid_cdm
   */
  project?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The scope of storage sharing. Valid values: Environment, Region, Workspace, and Custom.
   * 
   * @example
   * Region
   */
  shareScope?: string;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * Prometheus
   */
  storageType?: string;
  /**
   * @remarks
   * The tags that need to be added to the destination storage. The tags are injected as system tags.
   */
  systemTags?: { [key: string]: string };
  /**
   * @remarks
   * The tags that need to be added to the destination storage. The tags are injected as common tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345678
   */
  userId?: string;
  /**
   * @remarks
   * The workspace.
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
   * The instance ID.
   * 
   * @example
   * rmq-cn-uqm3ket1t0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The internal URL.
   * 
   * @example
   * http://192.168.xxxxxx
   */
  interUrl?: string;
  /**
   * @remarks
   * The internal URL.
   * 
   * @example
   * http://100.100.xxxxxx
   */
  intraUrl?: string;
  /**
   * @remarks
   * The name of the storage requirement.
   * 
   * @example
   * sr-xxxx
   */
  name?: string;
  /**
   * @remarks
   * The project for the storage requirement.
   * 
   * @example
   * jiuwu_algo
   */
  project?: string;
  /**
   * @remarks
   * The metric store of Prometheus.
   * 
   * @example
   * xxxx
   */
  promMetricStore?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * Prometheus
   */
  storageType?: string;
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
   * A collection of AddonRelease names.
   */
  addonReleaseNames?: string[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  apiVersion?: string;
  /**
   * @remarks
   * The kind of the resource.
   * 
   * @example
   * Pod
   */
  kind?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsMetadata;
  /**
   * @remarks
   * The spec of the resource.
   */
  spec?: ListIntegrationPolicyStorageRequirementsResponseBodyStorageRequirementsSpec;
  /**
   * @remarks
   * The status of the storage requirement.
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
   * Id of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of storage requirements.
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

