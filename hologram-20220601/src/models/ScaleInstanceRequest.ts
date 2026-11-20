// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The infrequent access storage space of the instance. Unit: GB.
   * 
   * > This parameter is ignored for pay-as-you-go instances.
   * 
   * @example
   * 1000
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The instance specifications. Valid values:
   * - 16 cores, 64 GB (Number of compute nodes: 1)
   * - 32 cores, 128 GB (Number of compute nodes: 2)
   * - 64 cores, 256 GB (Number of compute nodes: 4)
   * - 96 cores, 384 GB (Number of compute nodes: 6)
   * - 128 cores, 512 GB (Number of compute nodes: 8)
   * - More
   * 
   * >
   *  >- Specify only the number of cores.
   *  >- To purchase specifications with more than 1,024 cores, submit a ticket.
   *  >- You do not need to specify the specifications for shared instances.
   * 
   * @example
   * 128
   */
  cpu?: number;
  /**
   * @remarks
   * Specifies whether to enable serverless computing.
   * 
   * @example
   * true
   */
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * > This parameter is required only for the Warehouse type.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The type of the specification change. Valid values:
   * - UPGRADE: upgrades the specifications.
   * - DOWNGRADE: downgrades the specifications.
   * > 
   * > - When you upgrade the specifications, the new specifications cannot be lower than the original specifications. An empty field indicates that the original specifications remain unchanged. At least one specification must be higher than the original specification.
   * > - When you downgrade the specifications, the new specifications cannot be higher than the original specifications. An empty field indicates that the original specifications remain unchanged. At least one specification must be lower than the original specification.
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  scaleType?: string;
  /**
   * @remarks
   * The standard storage space of the instance. Unit: GB.
   * 
   * > This parameter is ignored for pay-as-you-go instances.
   * 
   * @example
   * 1000
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      coldStorageSize: 'coldStorageSize',
      cpu: 'cpu',
      enableServerlessComputing: 'enableServerlessComputing',
      gatewayCount: 'gatewayCount',
      scaleType: 'scaleType',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageSize: 'number',
      cpu: 'number',
      enableServerlessComputing: 'boolean',
      gatewayCount: 'number',
      scaleType: 'string',
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

