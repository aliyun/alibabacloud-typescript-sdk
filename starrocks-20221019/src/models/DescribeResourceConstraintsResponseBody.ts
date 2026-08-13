// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataZoneSupportCompactionServiceValue } from "./DataZoneSupportCompactionServiceValue";


export class DescribeResourceConstraintsResponseBodyDataBeNumber extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  default?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  default?: number;
  /**
   * @remarks
   * The maximum number of disks.
   * 
   * @example
   * 10
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of disks.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  default?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 5
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * BE 存储约束描述
   */
  desc?: string;
  /**
   * @remarks
   * The disk count constraint.
   */
  diskNumberConstraint?: DescribeResourceConstraintsResponseBodyDataBeStorageConstraintsDiskNumberConstraint;
  /**
   * @remarks
   * Indicates whether this is the default option.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The disk performance level.
   * 
   * @example
   * PL1
   */
  level?: string;
  /**
   * @remarks
   * The value constraint.
   */
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
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 20
   */
  cpu?: number;
  /**
   * @remarks
   * The disk count.
   * 
   * @example
   * 8
   */
  diskNumber?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 20核 88GiB 8*7300GiB 本地HDD盘
   */
  display?: string;
  /**
   * @remarks
   * The corresponding ECS instance family.
   * 
   * @example
   * ecs.d2s.5xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * local_hdd_2s_5xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether this is the default option.
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * The memory size, in GiB.
   * 
   * @example
   * 88
   */
  memory?: number;
  /**
   * @remarks
   * The storage size, in GiB.
   * 
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
   * @remarks
   * The default value.
   * 
   * @example
   * 3
   */
  default?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 11
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 标准版
   */
  display?: string;
  /**
   * @remarks
   * The name.
   * 
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
   * @remarks
   * The default value.
   * 
   * @example
   * 500
   */
  default?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 5000
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 200
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
   * @remarks
   * The CU (Compute Unit) size.
   * 
   * @example
   * 16
   */
  cu?: number;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 5
   */
  nodeNumber?: number;
  /**
   * @remarks
   * The storage size, in GiB.
   * 
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
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @remarks
   * The disk count.
   * 
   * @example
   * 1
   */
  diskNumber?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * [i2g]16核 64GiB 1*1788GiB 本地SSD盘
   */
  display?: string;
  /**
   * @remarks
   * The corresponding ECS instance family.
   * 
   * @example
   * ecs.i2g.4xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * local_ssd_2g_4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether this is the default option.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * The memory size, in GiB.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The storage size, in GiB.
   * 
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
   * @remarks
   * The CU (Compute Unit) size.
   * 
   * @example
   * 64
   */
  cu?: number;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 5
   */
  nodeNumber?: number;
  /**
   * @remarks
   * The storage size, in GiB.
   * 
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
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 标准版
   */
  display?: string;
  /**
   * @remarks
   * The name.
   * 
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
  /**
   * @remarks
   * The beta versions.
   */
  betaVersions?: string[];
  /**
   * @remarks
   * The default version.
   * 
   * @example
   * 3.3
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The available versions.
   */
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
   * @remarks
   * The default value.
   * 
   * @example
   * 16
   */
  def?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 256
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 8
   */
  min?: number;
  /**
   * @remarks
   * The step.
   * 
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
  /**
   * @remarks
   * The CU sizes for agents.
   */
  agentCu?: number[];
  /**
   * @remarks
   * The available CU (Compute Unit) sizes for BE nodes.
   */
  beCu?: number[];
  /**
   * @remarks
   * The CU sizes for BE nodes on ECS.
   */
  beCuOnEcs?: number[];
  /**
   * @remarks
   * The BE node configuration.
   */
  beNumber?: DescribeResourceConstraintsResponseBodyDataBeNumber;
  /**
   * @remarks
   * The storage constraints for BE nodes.
   */
  beStorageConstraints?: DescribeResourceConstraintsResponseBodyDataBeStorageConstraints[];
  /**
   * @remarks
   * The specification constraints for big data instance types.
   */
  bigDataInstanceTypeConstraints?: DescribeResourceConstraintsResponseBodyDataBigDataInstanceTypeConstraints[];
  /**
   * @remarks
   * The available CU sizes for FE nodes.
   */
  feCu?: number[];
  /**
   * @remarks
   * The CU sizes for FE nodes on ECS.
   */
  feCuOnEcs?: number[];
  /**
   * @remarks
   * The number of FE nodes.
   */
  feNumber?: DescribeResourceConstraintsResponseBodyDataFeNumber;
  /**
   * @remarks
   * The instance types for FE nodes.
   */
  feSpecType?: DescribeResourceConstraintsResponseBodyDataFeSpecType[];
  /**
   * @remarks
   * The storage size for the FE node.
   */
  feStorage?: DescribeResourceConstraintsResponseBodyDataFeStorage;
  /**
   * @remarks
   * The high availability (HA) FE node configuration.
   */
  haFeResourceSpec?: DescribeResourceConstraintsResponseBodyDataHaFeResourceSpec;
  /**
   * @remarks
   * The specification constraints for local SSD instance types.
   */
  localSSDInstanceTypeConstraints?: DescribeResourceConstraintsResponseBodyDataLocalSSDInstanceTypeConstraints[];
  /**
   * @remarks
   * The standard FE resource configuration.
   */
  normalFeResourceSpec?: DescribeResourceConstraintsResponseBodyDataNormalFeResourceSpec;
  /**
   * @remarks
   * The instance type for compute nodes. Valid values:
   * 
   * - `standard`: Standard.
   * 
   * - `localSSD`: Local SSD.
   * 
   * - `bigData`: Large-capacity storage.
   * 
   * - `ramEnhanced`: Memory-enhanced.
   * 
   * - `networkEnhanced`: Network-enhanced.
   * 
   * @example
   * standard
   */
  specType?: DescribeResourceConstraintsResponseBodyDataSpecType[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Deprecated.
   */
  splitDiskThresholdMap?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The version constraint.
   */
  versionConstraint?: DescribeResourceConstraintsResponseBodyDataVersionConstraint;
  /**
   * @remarks
   * The EED types supported in each availability zone.
   */
  zoneSupportedEedTypes?: { [key: string]: string[] };
  /**
   * @remarks
   * The instance types supported in each availability zone.
   */
  zoneSupportedSpecTypes?: { [key: string]: string[] };
  /**
   * @remarks
   * The CU constraints for the compaction service.
   */
  compactionServiceCuConstraint?: DescribeResourceConstraintsResponseBodyDataCompactionServiceCuConstraint;
  /**
   * @remarks
   * The compaction services supported in each availability zone.
   */
  zoneSupportCompactionService?: { [key: string]: DataZoneSupportCompactionServiceValue[] };
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
      zoneSupportCompactionService: 'zoneSupportCompactionService',
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
      zoneSupportCompactionService: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataZoneSupportCompactionServiceValue } },
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
    if(this.zoneSupportCompactionService) {
      $dara.Model.validateMap(this.zoneSupportCompactionService);
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
   * Details about the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeResourceConstraintsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The error code. A value of `Success` indicates that the request was successful.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

