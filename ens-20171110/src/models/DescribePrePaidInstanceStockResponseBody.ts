// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrePaidInstanceStockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of resources that you can purchase.
   * 
   * @example
   * 84
   */
  avaliableCount?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cores?: number;
  /**
   * @remarks
   * The size of the data disk.
   * 
   * @example
   * 20
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 007833C8-E819-4122-B636-0D48D7BF6DFB
   */
  requestId?: string;
  /**
   * @remarks
   * The reason why resources are insufficient.
   * 
   * @example
   * StockNotEnough
   */
  resourceGap?: string;
  /**
   * @remarks
   * The size of the system disk.
   * 
   * @example
   * 20
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      avaliableCount: 'AvaliableCount',
      cores: 'Cores',
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      memory: 'Memory',
      requestId: 'RequestId',
      resourceGap: 'ResourceGap',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableCount: 'number',
      cores: 'number',
      dataDiskSize: 'number',
      ensRegionId: 'string',
      instanceSpec: 'string',
      memory: 'number',
      requestId: 'string',
      resourceGap: 'string',
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

