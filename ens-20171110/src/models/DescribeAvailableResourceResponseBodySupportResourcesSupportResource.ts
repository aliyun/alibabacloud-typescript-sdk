// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * @example
   * 500
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specifications of the resource plan.
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
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'string',
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

