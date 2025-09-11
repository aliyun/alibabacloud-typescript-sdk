// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource extends $dara.Model {
  /**
   * @remarks
   * The maximum amount of elastic I/O resources.
   * 
   * @example
   * 200
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum amount of elastic I/O resources.
   * 
   * @example
   * 0
   */
  minCount?: string;
  /**
   * @remarks
   * The step size.
   * 
   * @example
   * 1
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource extends $dara.Model {
  /**
   * @remarks
   * The disk storage type. Valid values:
   * 
   * *   **hdd**
   * *   **ssd**
   * 
   * @example
   * hdd
   */
  storageType?: string;
  /**
   * @remarks
   * The supported computing resources.
   */
  supportedComputeResource?: string[];
  /**
   * @remarks
   * The supported elastic I/O resources.
   */
  supportedElasticIOResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource;
  /**
   * @remarks
   * The supported storage resources.
   */
  supportedStorageResource?: string[];
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      supportedComputeResource: 'SupportedComputeResource',
      supportedElasticIOResource: 'SupportedElasticIOResource',
      supportedStorageResource: 'SupportedStorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedElasticIOResource: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource,
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedComputeResource)) {
      $dara.Model.validateArray(this.supportedComputeResource);
    }
    if(this.supportedElasticIOResource && typeof (this.supportedElasticIOResource as any).validate === 'function') {
      (this.supportedElasticIOResource as any).validate();
    }
    if(Array.isArray(this.supportedStorageResource)) {
      $dara.Model.validateArray(this.supportedStorageResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList extends $dara.Model {
  /**
   * @remarks
   * The information about the supported compute nodes.
   */
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount,
    };
  }

  validate() {
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of compute nodes.
   * 
   * @example
   * 200
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum number of compute nodes.
   * 
   * @example
   * 1
   */
  minCount?: string;
  /**
   * @remarks
   * The step size.
   * 
   * @example
   * 1
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList extends $dara.Model {
  /**
   * @remarks
   * The number of the supported compute nodes.
   */
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount;
  /**
   * @remarks
   * The support storage capacity. Unit: GB.
   */
  storageSize?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount,
      storageSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    if(Array.isArray(this.storageSize)) {
      $dara.Model.validateArray(this.storageSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList extends $dara.Model {
  /**
   * @remarks
   * The supported instance type.
   * 
   * @example
   * C32
   */
  instanceClass?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedExecutorList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList[];
  /**
   * @remarks
   * The supported compute nodes.
   */
  supportedNodeCountList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList[];
  /**
   * @remarks
   * The description of the instance type.
   * 
   * @example
   * C32
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      supportedExecutorList: 'SupportedExecutorList',
      supportedNodeCountList: 'SupportedNodeCountList',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      supportedExecutorList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList },
      supportedNodeCountList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList },
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedExecutorList)) {
      $dara.Model.validateArray(this.supportedExecutorList);
    }
    if(Array.isArray(this.supportedNodeCountList)) {
      $dara.Model.validateArray(this.supportedNodeCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList extends $dara.Model {
  /**
   * @remarks
   * The supported edition. Valid values:
   * 
   * *   **basic**: Basic Edition.
   * *   **cluster**: Cluster Edition.
   * *   **mixed_storage**: elastic mode for Cluster Edition.
   * 
   * @example
   * mixed_storage
   */
  serial?: string;
  /**
   * @remarks
   * The supported resources in elastic mode.
   */
  supportedFlexibleResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource[];
  /**
   * @remarks
   * The supported resources in reserved mode.
   */
  supportedInstanceClassList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList[];
  static names(): { [key: string]: string } {
    return {
      serial: 'Serial',
      supportedFlexibleResource: 'SupportedFlexibleResource',
      supportedInstanceClassList: 'SupportedInstanceClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serial: 'string',
      supportedFlexibleResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource },
      supportedInstanceClassList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList },
    };
  }

  validate() {
    if(Array.isArray(this.supportedFlexibleResource)) {
      $dara.Model.validateArray(this.supportedFlexibleResource);
    }
    if(Array.isArray(this.supportedInstanceClassList)) {
      $dara.Model.validateArray(this.supportedInstanceClassList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode extends $dara.Model {
  /**
   * @remarks
   * The supported mode. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The supported editions.
   */
  supportedSerialList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedSerialList: 'SupportedSerialList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedSerialList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSerialList)) {
      $dara.Model.validateArray(this.supportedSerialList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneList extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedComputeResource?: string[];
  /**
   * @remarks
   * The supported modes.
   */
  supportedMode?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode[];
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedStorageResource?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      supportedComputeResource: 'SupportedComputeResource',
      supportedMode: 'SupportedMode',
      supportedStorageResource: 'SupportedStorageResource',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedMode: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode },
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedComputeResource)) {
      $dara.Model.validateArray(this.supportedComputeResource);
    }
    if(Array.isArray(this.supportedMode)) {
      $dara.Model.validateArray(this.supportedMode);
    }
    if(Array.isArray(this.supportedStorageResource)) {
      $dara.Model.validateArray(this.supportedStorageResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported zones.
   */
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneList },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZoneList)) {
      $dara.Model.validateArray(this.availableZoneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

