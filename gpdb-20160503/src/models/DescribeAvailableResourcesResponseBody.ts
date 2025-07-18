// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of compute nodes.
   * 
   * @example
   * 256
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum number of compute nodes.
   * 
   * @example
   * 4
   */
  minCount?: string;
  /**
   * @remarks
   * The step size for adding compute nodes.
   * 
   * For example, if the value of this parameter is 4, compute nodes must be added by multiples of 4.
   * 
   * @example
   * 4
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

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity of each compute node.
   * 
   * @example
   * 1000
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum storage capacity of each compute node.
   * 
   * @example
   * 50
   */
  minCount?: string;
  /**
   * @remarks
   * The step size for adding storage capacity for compute nodes.
   * 
   * @example
   * 50
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

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **HighAvailability**: High-availability Edition
   * *   **Basic**: Basic Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The description of compute node specifications.
   * 
   * @example
   * 2C16G
   */
  description?: string;
  /**
   * @remarks
   * The specifications of each compute node.
   * 
   * @example
   * 2C16G
   */
  displayClass?: string;
  /**
   * @remarks
   * The specifications of each compute node.
   * 
   * @example
   * 2C16G
   */
  instanceClass?: string;
  /**
   * @remarks
   * Details about the compute nodes.
   */
  nodeCount?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount;
  /**
   * @remarks
   * Details about the storage capacity of compute nodes.
   */
  storageSize?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **cloud_essd**: enhanced SSD (ESSD)
   * *   **cloud_efficiency**: ultra disk
   * *   **oss**: Object Storage Service (OSS)
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      displayClass: 'DisplayClass',
      instanceClass: 'InstanceClass',
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      displayClass: 'string',
      instanceClass: 'string',
      nodeCount: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount,
      storageSize: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize,
      storageType: 'string',
    };
  }

  validate() {
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    if(this.storageSize && typeof (this.storageSize as any).validate === 'function') {
      (this.storageSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEngines extends $dara.Model {
  /**
   * @remarks
   * The instance resource type. Valid values:
   * 
   * *   **ecs**: elastic storage mode
   * *   **serverless**: Serverless mode
   * 
   * @example
   * ecs
   */
  mode?: string;
  /**
   * @remarks
   * The available engine version.
   * 
   * @example
   * 6.0
   */
  supportedEngineVersion?: string;
  /**
   * @remarks
   * The available specifications.
   */
  supportedInstanceClasses?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedEngineVersion: 'SupportedEngineVersion',
      supportedInstanceClasses: 'SupportedInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedEngineVersion: 'string',
      supportedInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceClasses)) {
      $dara.Model.validateArray(this.supportedInstanceClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The available engine version and specifications.
   */
  supportedEngines?: DescribeAvailableResourcesResponseBodyResourcesSupportedEngines[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEngines },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngines)) {
      $dara.Model.validateArray(this.supportedEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBody extends $dara.Model {
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
   * 61DC563C-F8E4-593A-8D27-CE**********
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID.
   */
  resources?: DescribeAvailableResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

