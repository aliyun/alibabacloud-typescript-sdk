// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceInfoPorts extends $dara.Model {
  name?: string;
  port?: number;
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
  key?: string;
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
  labels?: ServiceInfoVersionsLabels[];
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
  expressType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  paiWorkspaceId?: string;
  paiWorkspaceName?: string;
  ports?: ServiceInfoPorts[];
  qualifier?: string;
  serviceId?: string;
  sourceType?: string;
  status?: string;
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

