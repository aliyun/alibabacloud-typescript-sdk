// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceInfoPorts extends $dara.Model {
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * http
   */
  name?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The port protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInfoVersionsLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * production
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInfoVersions extends $dara.Model {
  /**
   * @remarks
   * The list of version labels.
   */
  labels?: ServiceInfoVersionsLabels[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1.0.0
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ServiceInfoVersionsLabels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInfo extends $dara.Model {
  /**
   * @remarks
   * The service routing type.
   * 
   * @example
   * normal
   */
  expressType?: string;
  /**
   * @remarks
   * The service group name.
   * 
   * @example
   * default-group
   */
  groupName?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * my-openai-service
   */
  name?: string;
  /**
   * @remarks
   * The service namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The PAI workspace ID.
   * 
   * @example
   * ws-xxx****
   */
  paiWorkspaceId?: string;
  /**
   * @remarks
   * The PAI workspace name.
   * 
   * @example
   * my-workspace
   */
  paiWorkspaceName?: string;
  /**
   * @remarks
   * The list of service ports.
   */
  ports?: ServiceInfoPorts[];
  /**
   * @remarks
   * The service version qualifier.
   * 
   * @example
   * v1
   */
  qualifier?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-xxx****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service source type.
   * 
   * @example
   * user
   */
  sourceType?: string;
  /**
   * @remarks
   * The service status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The list of service versions.
   */
  versions?: ServiceInfoVersions[];
  static names(): { [key: string]: string } {
    return {
      expressType: 'expressType',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      paiWorkspaceId: 'paiWorkspaceId',
      paiWorkspaceName: 'paiWorkspaceName',
      ports: 'ports',
      qualifier: 'qualifier',
      serviceId: 'serviceId',
      sourceType: 'sourceType',
      status: 'status',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressType: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      paiWorkspaceId: 'string',
      paiWorkspaceName: 'string',
      ports: { 'type': 'array', 'itemType': ServiceInfoPorts },
      qualifier: 'string',
      serviceId: 'string',
      sourceType: 'string',
      status: 'string',
      versions: { 'type': 'array', 'itemType': ServiceInfoVersions },
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

