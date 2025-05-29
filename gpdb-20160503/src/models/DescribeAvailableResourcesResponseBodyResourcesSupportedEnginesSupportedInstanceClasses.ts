// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount } from "./DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount";
import { DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize } from "./DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize";


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

