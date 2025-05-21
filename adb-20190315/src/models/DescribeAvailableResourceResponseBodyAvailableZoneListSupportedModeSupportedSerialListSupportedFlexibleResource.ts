// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIOResource } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResourceSupportedElasticIoresource";


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

