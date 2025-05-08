// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes } from "./DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes";
import { DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes } from "./DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes";


export class DescribeReservedResourceResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * The sizes of data disks.
   */
  dataDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specifications of instances.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of resources that you can purchase.
   * 
   * @example
   * 9
   */
  supportResourcesCount?: string;
  /**
   * @remarks
   * The sizes of system disks.
   */
  systemDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes;
  static names(): { [key: string]: string } {
    return {
      dataDiskSizes: 'DataDiskSizes',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSizes: 'SystemDiskSizes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes,
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes,
    };
  }

  validate() {
    if(this.dataDiskSizes && typeof (this.dataDiskSizes as any).validate === 'function') {
      (this.dataDiskSizes as any).validate();
    }
    if(this.systemDiskSizes && typeof (this.systemDiskSizes as any).validate === 'function') {
      (this.systemDiskSizes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

