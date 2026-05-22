// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent extends $dara.Model {
  command?: string;
  failureThreshold?: number;
  host?: string;
  httpHeaders?: string;
  initialDelaySeconds?: number;
  path?: string;
  periodSeconds?: number;
  port?: number;
  scheme?: string;
  successThreshold?: number;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      failureThreshold: 'FailureThreshold',
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      initialDelaySeconds: 'InitialDelaySeconds',
      path: 'Path',
      periodSeconds: 'PeriodSeconds',
      port: 'Port',
      scheme: 'Scheme',
      successThreshold: 'SuccessThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      failureThreshold: 'number',
      host: 'string',
      httpHeaders: 'string',
      initialDelaySeconds: 'number',
      path: 'string',
      periodSeconds: 'number',
      port: 'number',
      scheme: 'string',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBodyVersionsContainers extends $dara.Model {
  args?: string;
  command?: string;
  envVariables?: string;
  image?: string;
  name?: string;
  postStart?: string;
  preStop?: string;
  probeContent?: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent;
  probeType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      envVariables: 'EnvVariables',
      image: 'Image',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      probeContent: 'ProbeContent',
      probeType: 'ProbeType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent,
      probeType: 'string',
      spec: 'string',
    };
  }

  validate() {
    if(this.probeContent && typeof (this.probeContent as any).validate === 'function') {
      (this.probeContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBodyVersions extends $dara.Model {
  appId?: string;
  containers?: ListEdgeContainerAppVersionsResponseBodyVersionsContainers[];
  createTime?: string;
  lastPublishTime?: string;
  name?: string;
  publishTime?: string;
  remarks?: string;
  status?: string;
  updateTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      createTime: 'CreateTime',
      lastPublishTime: 'LastPublishTime',
      name: 'Name',
      publishTime: 'PublishTime',
      remarks: 'Remarks',
      status: 'Status',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': ListEdgeContainerAppVersionsResponseBodyVersionsContainers },
      createTime: 'string',
      lastPublishTime: 'string',
      name: 'string',
      publishTime: 'string',
      remarks: 'string',
      status: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppVersionsResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  versions?: ListEdgeContainerAppVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListEdgeContainerAppVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

