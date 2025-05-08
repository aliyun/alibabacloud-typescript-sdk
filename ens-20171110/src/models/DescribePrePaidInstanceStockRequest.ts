// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrePaidInstanceStockRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      ensRegionId: 'string',
      instanceSpec: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

