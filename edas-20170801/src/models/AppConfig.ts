// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppConfigConfigMountDescsMountItems extends $dara.Model {
  key?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigConfigMountDescs extends $dara.Model {
  mountItems?: AppConfigConfigMountDescsMountItems[];
  mountPath?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mountItems: 'MountItems',
      mountPath: 'MountPath',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountItems: { 'type': 'array', 'itemType': AppConfigConfigMountDescsMountItems },
      mountPath: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountItems)) {
      $dara.Model.validateArray(this.mountItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEmptyDirs extends $dara.Model {
  mountPath?: string;
  name?: string;
  readOnly?: boolean;
  subPathExpr?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPathExpr: 'SubPathExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPathExpr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEnvFroms extends $dara.Model {
  configMapRef?: string;
  secretRef?: string;
  static names(): { [key: string]: string } {
    return {
      configMapRef: 'ConfigMapRef',
      secretRef: 'SecretRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapRef: 'string',
      secretRef: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEnvs extends $dara.Model {
  name?: string;
  value?: string;
  valueFrom?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFrom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigImageConfig extends $dara.Model {
  containerRegistryId?: string;
  crInstanceId?: string;
  crRegionId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      containerRegistryId: 'ContainerRegistryId',
      crInstanceId: 'CrInstanceId',
      crRegionId: 'CrRegionId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerRegistryId: 'string',
      crInstanceId: 'string',
      crRegionId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigLocalVolumes extends $dara.Model {
  mountPath?: string;
  name?: string;
  nodePath?: string;
  opsAuth?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      nodePath: 'NodePath',
      opsAuth: 'OpsAuth',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      nodePath: 'string',
      opsAuth: 'number',
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

export class AppConfigNasMountDescs extends $dara.Model {
  mountPath?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPackageConfig extends $dara.Model {
  edasContainerVersion?: string;
  jdk?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  timezone?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      edasContainerVersion: 'EdasContainerVersion',
      jdk: 'Jdk',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      timezone: 'Timezone',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasContainerVersion: 'string',
      jdk: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      timezone: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      webContainer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPvcMountDescsMountPaths extends $dara.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPathExpr?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPathExpr: 'SubPathExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPathExpr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPvcMountDescs extends $dara.Model {
  mountPaths?: AppConfigPvcMountDescsMountPaths[];
  pvcName?: string;
  static names(): { [key: string]: string } {
    return {
      mountPaths: 'MountPaths',
      pvcName: 'PvcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPaths: { 'type': 'array', 'itemType': AppConfigPvcMountDescsMountPaths },
      pvcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountPaths)) {
      $dara.Model.validateArray(this.mountPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigSlsConfigs extends $dara.Model {
  logDir?: string;
  logstore?: string;
  project?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logDir: 'LogDir',
      logstore: 'Logstore',
      project: 'Project',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logDir: 'string',
      logstore: 'string',
      project: 'string',
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

export class AppConfigWebContainerConfig extends $dara.Model {
  connectorType?: string;
  contextInputType?: string;
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  serverXml?: string;
  uriEncoding?: string;
  useAdvancedServerXml?: boolean;
  useBodyEncoding?: boolean;
  useDefaultConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectorType: 'ConnectorType',
      contextInputType: 'ContextInputType',
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      serverXml: 'ServerXml',
      uriEncoding: 'UriEncoding',
      useAdvancedServerXml: 'UseAdvancedServerXml',
      useBodyEncoding: 'UseBodyEncoding',
      useDefaultConfig: 'UseDefaultConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorType: 'string',
      contextInputType: 'string',
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      serverXml: 'string',
      uriEncoding: 'string',
      useAdvancedServerXml: 'boolean',
      useBodyEncoding: 'boolean',
      useDefaultConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfig extends $dara.Model {
  command?: string;
  commandArgs?: string[];
  configMountDescs?: AppConfigConfigMountDescs[];
  deployAcrossNodes?: boolean;
  deployAcrossZones?: boolean;
  emptyDirs?: AppConfigEmptyDirs[];
  enableAhas?: boolean;
  envFroms?: AppConfigEnvFroms[];
  envs?: AppConfigEnvs[];
  imageConfig?: AppConfigImageConfig;
  isMultilingualApp?: boolean;
  javaStartUpConfig?: string;
  limitCpu?: string;
  limitMem?: string;
  liveness?: string;
  localVolumes?: AppConfigLocalVolumes[];
  nasId?: string;
  nasMountDescs?: AppConfigNasMountDescs[];
  nasStorageType?: string;
  packageConfig?: AppConfigPackageConfig;
  postStart?: string;
  preStop?: string;
  pvcMountDescs?: AppConfigPvcMountDescs[];
  readiness?: string;
  replicas?: number;
  requestCpu?: string;
  requestMem?: string;
  runtimeClassName?: string;
  slsConfigs?: AppConfigSlsConfigs[];
  webContainerConfig?: AppConfigWebContainerConfig;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMountDescs: 'ConfigMountDescs',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      imageConfig: 'ImageConfig',
      isMultilingualApp: 'IsMultilingualApp',
      javaStartUpConfig: 'JavaStartUpConfig',
      limitCpu: 'LimitCpu',
      limitMem: 'LimitMem',
      liveness: 'Liveness',
      localVolumes: 'LocalVolumes',
      nasId: 'NasId',
      nasMountDescs: 'NasMountDescs',
      nasStorageType: 'NasStorageType',
      packageConfig: 'PackageConfig',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      requestCpu: 'RequestCpu',
      requestMem: 'RequestMem',
      runtimeClassName: 'RuntimeClassName',
      slsConfigs: 'SlsConfigs',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: { 'type': 'array', 'itemType': 'string' },
      configMountDescs: { 'type': 'array', 'itemType': AppConfigConfigMountDescs },
      deployAcrossNodes: 'boolean',
      deployAcrossZones: 'boolean',
      emptyDirs: { 'type': 'array', 'itemType': AppConfigEmptyDirs },
      enableAhas: 'boolean',
      envFroms: { 'type': 'array', 'itemType': AppConfigEnvFroms },
      envs: { 'type': 'array', 'itemType': AppConfigEnvs },
      imageConfig: AppConfigImageConfig,
      isMultilingualApp: 'boolean',
      javaStartUpConfig: 'string',
      limitCpu: 'string',
      limitMem: 'string',
      liveness: 'string',
      localVolumes: { 'type': 'array', 'itemType': AppConfigLocalVolumes },
      nasId: 'string',
      nasMountDescs: { 'type': 'array', 'itemType': AppConfigNasMountDescs },
      nasStorageType: 'string',
      packageConfig: AppConfigPackageConfig,
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: { 'type': 'array', 'itemType': AppConfigPvcMountDescs },
      readiness: 'string',
      replicas: 'number',
      requestCpu: 'string',
      requestMem: 'string',
      runtimeClassName: 'string',
      slsConfigs: { 'type': 'array', 'itemType': AppConfigSlsConfigs },
      webContainerConfig: AppConfigWebContainerConfig,
    };
  }

  validate() {
    if(Array.isArray(this.commandArgs)) {
      $dara.Model.validateArray(this.commandArgs);
    }
    if(Array.isArray(this.configMountDescs)) {
      $dara.Model.validateArray(this.configMountDescs);
    }
    if(Array.isArray(this.emptyDirs)) {
      $dara.Model.validateArray(this.emptyDirs);
    }
    if(Array.isArray(this.envFroms)) {
      $dara.Model.validateArray(this.envFroms);
    }
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(Array.isArray(this.localVolumes)) {
      $dara.Model.validateArray(this.localVolumes);
    }
    if(Array.isArray(this.nasMountDescs)) {
      $dara.Model.validateArray(this.nasMountDescs);
    }
    if(this.packageConfig && typeof (this.packageConfig as any).validate === 'function') {
      (this.packageConfig as any).validate();
    }
    if(Array.isArray(this.pvcMountDescs)) {
      $dara.Model.validateArray(this.pvcMountDescs);
    }
    if(Array.isArray(this.slsConfigs)) {
      $dara.Model.validateArray(this.slsConfigs);
    }
    if(this.webContainerConfig && typeof (this.webContainerConfig as any).validate === 'function') {
      (this.webContainerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

