// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceConstraintsResponseBodyDataBeNumber extends $dara.Model {
  /**
   * @example
   * 1
   */
  default?: number;
  /**
   * @example
   * 10
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  /**
   * @example
   * 1
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsDiskNumberConstraint extends $dara.Model {
  /**
   * @example
   * 1
   */
  default?: number;
  /**
   * @example
   * 10
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  /**
   * @example
   * 1
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsValueConstraint extends $dara.Model {
  /**
   * @example
   * 1
   */
  default?: number;
  /**
   * @example
   * 5
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  /**
   * @example
   * 1
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataBeStorageConstraints extends $dara.Model {
  desc?: string;
  diskNumberConstraint?: DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsDiskNumberConstraint;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * PL1
   */
  level?: string;
  valueConstraint?: DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsValueConstraint;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      diskNumberConstraint: 'DiskNumberConstraint',
      isDefault: 'IsDefault',
      level: 'Level',
      valueConstraint: 'ValueConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      diskNumberConstraint: DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsDiskNumberConstraint,
      isDefault: 'boolean',
      level: 'string',
      valueConstraint: DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsValueConstraint,
    };
  }

  validate() {
    if(this.diskNumberConstraint && typeof (this.diskNumberConstraint as any).validate === 'function') {
      (this.diskNumberConstraint as any).validate();
    }
    if(this.valueConstraint && typeof (this.valueConstraint as any).validate === 'function') {
      (this.valueConstraint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataBigDataInstanceTypeConstraints extends $dara.Model {
  /**
   * @example
   * 20
   */
  cpu?: number;
  /**
   * @example
   * 8
   */
  diskNumber?: string;
  display?: string;
  /**
   * @example
   * ecs.d2s.5xlarge
   */
  ecsInstanceType?: string;
  /**
   * @example
   * local_hdd_2s_5xlarge
   */
  instanceType?: string;
  /**
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @example
   * 88
   */
  memory?: number;
  /**
   * @example
   * 7300
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskNumber: 'DiskNumber',
      display: 'Display',
      ecsInstanceType: 'EcsInstanceType',
      instanceType: 'InstanceType',
      isDefault: 'IsDefault',
      memory: 'Memory',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      diskNumber: 'string',
      display: 'string',
      ecsInstanceType: 'string',
      instanceType: 'string',
      isDefault: 'string',
      memory: 'number',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataFeNumber extends $dara.Model {
  /**
   * @example
   * 3
   */
  default?: number;
  /**
   * @example
   * 11
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  /**
   * @example
   * 2
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataFeSpecType extends $dara.Model {
  display?: string;
  /**
   * @example
   * standard
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataFeStorage extends $dara.Model {
  /**
   * @example
   * 500
   */
  default?: number;
  /**
   * @example
   * 5000
   */
  max?: number;
  /**
   * @example
   * 200
   */
  min?: number;
  /**
   * @example
   * 100
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataHaFeResourceSpec extends $dara.Model {
  /**
   * @example
   * 16
   */
  cu?: number;
  /**
   * @example
   * 5
   */
  nodeNumber?: number;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      nodeNumber: 'NodeNumber',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      nodeNumber: 'number',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataLocalSSDInstanceTypeConstraints extends $dara.Model {
  /**
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @example
   * 1
   */
  diskNumber?: string;
  display?: string;
  /**
   * @example
   * ecs.i2g.4xlarge
   */
  ecsInstanceType?: string;
  /**
   * @example
   * local_ssd_2g_4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @example
   * 64
   */
  memory?: number;
  /**
   * @example
   * 1788
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskNumber: 'DiskNumber',
      display: 'Display',
      ecsInstanceType: 'EcsInstanceType',
      instanceType: 'InstanceType',
      isDefault: 'IsDefault',
      memory: 'Memory',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      diskNumber: 'string',
      display: 'string',
      ecsInstanceType: 'string',
      instanceType: 'string',
      isDefault: 'string',
      memory: 'number',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataNormalFeResourceSpec extends $dara.Model {
  /**
   * @example
   * 64
   */
  cu?: number;
  /**
   * @example
   * 5
   */
  nodeNumber?: number;
  /**
   * @example
   * 500
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      nodeNumber: 'NodeNumber',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      nodeNumber: 'number',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataSpecType extends $dara.Model {
  display?: string;
  /**
   * @example
   * standard
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyDataVersionConstraint extends $dara.Model {
  betaVersions?: string[];
  /**
   * @example
   * 3.3
   */
  defaultVersion?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      betaVersions: 'BetaVersions',
      defaultVersion: 'DefaultVersion',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      betaVersions: { 'type': 'array', 'itemType': 'string' },
      defaultVersion: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.betaVersions)) {
      $dara.Model.validateArray(this.betaVersions);
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

export class DescribeResourceConstraintsResponseBodyDataCompactionServiceCuConstraint extends $dara.Model {
  /**
   * @example
   * 16
   */
  def?: number;
  /**
   * @example
   * 256
   */
  max?: number;
  /**
   * @example
   * 8
   */
  min?: number;
  /**
   * @example
   * 8
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      def: 'def',
      max: 'max',
      min: 'min',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      def: 'number',
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBodyData extends $dara.Model {
  agentCu?: number[];
  beCu?: number[];
  beCuOnEcs?: number[];
  beNumber?: DescribeResourceConstraintsResponseBodyDataBeNumber;
  beStorageConstraints?: DescribeResourceConstraintsResponseBodyDataBeStorageConstraints[];
  bigDataInstanceTypeConstraints?: DescribeResourceConstraintsResponseBodyDataBigDataInstanceTypeConstraints[];
  feCu?: number[];
  feCuOnEcs?: number[];
  feNumber?: DescribeResourceConstraintsResponseBodyDataFeNumber;
  feSpecType?: DescribeResourceConstraintsResponseBodyDataFeSpecType[];
  feStorage?: DescribeResourceConstraintsResponseBodyDataFeStorage;
  haFeResourceSpec?: DescribeResourceConstraintsResponseBodyDataHaFeResourceSpec;
  localSSDInstanceTypeConstraints?: DescribeResourceConstraintsResponseBodyDataLocalSSDInstanceTypeConstraints[];
  normalFeResourceSpec?: DescribeResourceConstraintsResponseBodyDataNormalFeResourceSpec;
  /**
   * @example
   * standard
   */
  specType?: DescribeResourceConstraintsResponseBodyDataSpecType[];
  splitDiskThresholdMap?: { [key: string]: {[key: string]: any} };
  versionConstraint?: DescribeResourceConstraintsResponseBodyDataVersionConstraint;
  zoneSupportedEedTypes?: { [key: string]: string[] };
  zoneSupportedSpecTypes?: { [key: string]: string[] };
  compactionServiceCuConstraint?: DescribeResourceConstraintsResponseBodyDataCompactionServiceCuConstraint;
  static names(): { [key: string]: string } {
    return {
      agentCu: 'AgentCu',
      beCu: 'BeCu',
      beCuOnEcs: 'BeCuOnEcs',
      beNumber: 'BeNumber',
      beStorageConstraints: 'BeStorageConstraints',
      bigDataInstanceTypeConstraints: 'BigDataInstanceTypeConstraints',
      feCu: 'FeCu',
      feCuOnEcs: 'FeCuOnEcs',
      feNumber: 'FeNumber',
      feSpecType: 'FeSpecType',
      feStorage: 'FeStorage',
      haFeResourceSpec: 'HaFeResourceSpec',
      localSSDInstanceTypeConstraints: 'LocalSSDInstanceTypeConstraints',
      normalFeResourceSpec: 'NormalFeResourceSpec',
      specType: 'SpecType',
      splitDiskThresholdMap: 'SplitDiskThresholdMap',
      versionConstraint: 'VersionConstraint',
      zoneSupportedEedTypes: 'ZoneSupportedEedTypes',
      zoneSupportedSpecTypes: 'ZoneSupportedSpecTypes',
      compactionServiceCuConstraint: 'compactionServiceCuConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCu: { 'type': 'array', 'itemType': 'number' },
      beCu: { 'type': 'array', 'itemType': 'number' },
      beCuOnEcs: { 'type': 'array', 'itemType': 'number' },
      beNumber: DescribeResourceConstraintsResponseBodyDataBeNumber,
      beStorageConstraints: { 'type': 'array', 'itemType': DescribeResourceConstraintsResponseBodyDataBeStorageConstraints },
      bigDataInstanceTypeConstraints: { 'type': 'array', 'itemType': DescribeResourceConstraintsResponseBodyDataBigDataInstanceTypeConstraints },
      feCu: { 'type': 'array', 'itemType': 'number' },
      feCuOnEcs: { 'type': 'array', 'itemType': 'number' },
      feNumber: DescribeResourceConstraintsResponseBodyDataFeNumber,
      feSpecType: { 'type': 'array', 'itemType': DescribeResourceConstraintsResponseBodyDataFeSpecType },
      feStorage: DescribeResourceConstraintsResponseBodyDataFeStorage,
      haFeResourceSpec: DescribeResourceConstraintsResponseBodyDataHaFeResourceSpec,
      localSSDInstanceTypeConstraints: { 'type': 'array', 'itemType': DescribeResourceConstraintsResponseBodyDataLocalSSDInstanceTypeConstraints },
      normalFeResourceSpec: DescribeResourceConstraintsResponseBodyDataNormalFeResourceSpec,
      specType: { 'type': 'array', 'itemType': DescribeResourceConstraintsResponseBodyDataSpecType },
      splitDiskThresholdMap: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      versionConstraint: DescribeResourceConstraintsResponseBodyDataVersionConstraint,
      zoneSupportedEedTypes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      zoneSupportedSpecTypes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      compactionServiceCuConstraint: DescribeResourceConstraintsResponseBodyDataCompactionServiceCuConstraint,
    };
  }

  validate() {
    if(Array.isArray(this.agentCu)) {
      $dara.Model.validateArray(this.agentCu);
    }
    if(Array.isArray(this.beCu)) {
      $dara.Model.validateArray(this.beCu);
    }
    if(Array.isArray(this.beCuOnEcs)) {
      $dara.Model.validateArray(this.beCuOnEcs);
    }
    if(this.beNumber && typeof (this.beNumber as any).validate === 'function') {
      (this.beNumber as any).validate();
    }
    if(Array.isArray(this.beStorageConstraints)) {
      $dara.Model.validateArray(this.beStorageConstraints);
    }
    if(Array.isArray(this.bigDataInstanceTypeConstraints)) {
      $dara.Model.validateArray(this.bigDataInstanceTypeConstraints);
    }
    if(Array.isArray(this.feCu)) {
      $dara.Model.validateArray(this.feCu);
    }
    if(Array.isArray(this.feCuOnEcs)) {
      $dara.Model.validateArray(this.feCuOnEcs);
    }
    if(this.feNumber && typeof (this.feNumber as any).validate === 'function') {
      (this.feNumber as any).validate();
    }
    if(Array.isArray(this.feSpecType)) {
      $dara.Model.validateArray(this.feSpecType);
    }
    if(this.feStorage && typeof (this.feStorage as any).validate === 'function') {
      (this.feStorage as any).validate();
    }
    if(this.haFeResourceSpec && typeof (this.haFeResourceSpec as any).validate === 'function') {
      (this.haFeResourceSpec as any).validate();
    }
    if(Array.isArray(this.localSSDInstanceTypeConstraints)) {
      $dara.Model.validateArray(this.localSSDInstanceTypeConstraints);
    }
    if(this.normalFeResourceSpec && typeof (this.normalFeResourceSpec as any).validate === 'function') {
      (this.normalFeResourceSpec as any).validate();
    }
    if(Array.isArray(this.specType)) {
      $dara.Model.validateArray(this.specType);
    }
    if(this.splitDiskThresholdMap) {
      $dara.Model.validateMap(this.splitDiskThresholdMap);
    }
    if(this.versionConstraint && typeof (this.versionConstraint as any).validate === 'function') {
      (this.versionConstraint as any).validate();
    }
    if(this.zoneSupportedEedTypes) {
      $dara.Model.validateMap(this.zoneSupportedEedTypes);
    }
    if(this.zoneSupportedSpecTypes) {
      $dara.Model.validateMap(this.zoneSupportedSpecTypes);
    }
    if(this.compactionServiceCuConstraint && typeof (this.compactionServiceCuConstraint as any).validate === 'function') {
      (this.compactionServiceCuConstraint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeResourceConstraintsResponseBodyData;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeResourceConstraintsResponseBodyData,
      errMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

