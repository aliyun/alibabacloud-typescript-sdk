// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes";
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds";
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends";
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces";
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp";


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * Bandwidth billing method.
   */
  bandwidthTypes?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes;
  /**
   * @remarks
   * The maximum capacity of a data disk. Unit: GB.
   * 
   * @example
   * 200
   */
  dataDiskMaxSize?: number;
  /**
   * @remarks
   * The minimum data disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  dataDiskMinSize?: number;
  /**
   * @remarks
   * node ID
   */
  ensRegionIds?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds;
  /**
   * @remarks
   * The supplementary information about the edge nodes.
   */
  ensRegionIdsExtends?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends;
  instanceSpeces?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces;
  /**
   * @remarks
   * Operator
   */
  isp?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp;
  /**
   * @remarks
   * The maximum size of the system disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  systemDiskMaxSize?: number;
  /**
   * @remarks
   * The minimum capacity of a system disk. Unit: GB.
   * 
   * @example
   * 20
   */
  systemDiskMinSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthTypes: 'BandwidthTypes',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      ensRegionIds: 'EnsRegionIds',
      ensRegionIdsExtends: 'EnsRegionIdsExtends',
      instanceSpeces: 'InstanceSpeces',
      isp: 'Isp',
      systemDiskMaxSize: 'SystemDiskMaxSize',
      systemDiskMinSize: 'SystemDiskMinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthTypes: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes,
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      ensRegionIds: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds,
      ensRegionIdsExtends: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends,
      instanceSpeces: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces,
      isp: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp,
      systemDiskMaxSize: 'number',
      systemDiskMinSize: 'number',
    };
  }

  validate() {
    if(this.bandwidthTypes && typeof (this.bandwidthTypes as any).validate === 'function') {
      (this.bandwidthTypes as any).validate();
    }
    if(this.ensRegionIds && typeof (this.ensRegionIds as any).validate === 'function') {
      (this.ensRegionIds as any).validate();
    }
    if(this.ensRegionIdsExtends && typeof (this.ensRegionIdsExtends as any).validate === 'function') {
      (this.ensRegionIdsExtends as any).validate();
    }
    if(this.instanceSpeces && typeof (this.instanceSpeces as any).validate === 'function') {
      (this.instanceSpeces as any).validate();
    }
    if(this.isp && typeof (this.isp as any).validate === 'function') {
      (this.isp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

