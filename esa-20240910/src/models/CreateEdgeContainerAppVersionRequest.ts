// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionRequestContainersACRImageInfo extends $dara.Model {
  domain?: string;
  instanceId?: string;
  isEnterpriseRegistry?: boolean;
  regionId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  tag?: string;
  tagUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      isEnterpriseRegistry: 'IsEnterpriseRegistry',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      tag: 'Tag',
      tagUrl: 'TagUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      isEnterpriseRegistry: 'boolean',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      tag: 'string',
      tagUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeContainerAppVersionRequestContainersProbeContent extends $dara.Model {
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

export class CreateEdgeContainerAppVersionRequestContainers extends $dara.Model {
  ACRImageInfo?: CreateEdgeContainerAppVersionRequestContainersACRImageInfo;
  args?: string;
  command?: string;
  envVariables?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  image?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isACRImage?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  postStart?: string;
  preStop?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  probeContent?: CreateEdgeContainerAppVersionRequestContainersProbeContent;
  /**
   * @remarks
   * This parameter is required.
   */
  probeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      ACRImageInfo: 'ACRImageInfo',
      args: 'Args',
      command: 'Command',
      envVariables: 'EnvVariables',
      image: 'Image',
      isACRImage: 'IsACRImage',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      probeContent: 'ProbeContent',
      probeType: 'ProbeType',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACRImageInfo: CreateEdgeContainerAppVersionRequestContainersACRImageInfo,
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      isACRImage: 'boolean',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: CreateEdgeContainerAppVersionRequestContainersProbeContent,
      probeType: 'string',
      spec: 'string',
      storage: 'string',
    };
  }

  validate() {
    if(this.ACRImageInfo && typeof (this.ACRImageInfo as any).validate === 'function') {
      (this.ACRImageInfo as any).validate();
    }
    if(this.probeContent && typeof (this.probeContent as any).validate === 'function') {
      (this.probeContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  containers?: CreateEdgeContainerAppVersionRequestContainers[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      name: 'Name',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': CreateEdgeContainerAppVersionRequestContainers },
      name: 'string',
      remarks: 'string',
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

