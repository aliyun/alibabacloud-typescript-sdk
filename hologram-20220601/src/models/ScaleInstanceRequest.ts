// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The infrequent access (IA) storage space of the instance. Unit: GB.
   * 
   * > Ignore this parameter for pay-as-you-go instances.
   * 
   * @example
   * 1000G
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   8-core 32GB (number of compute nodes: 1)
   * *   16-core 64GB (number of compute nodes: 1)
   * *   32-core 128GB (number of compute nodes: 2)
   * *   64-core 256GB (number of compute nodes: 4)
   * *   96-core 384GB (number of compute nodes: 6)
   * *   128-core 512GB (number of compute nodes: 8)
   * *   Others
   * 
   * > 
   * 
   * *   Set this parameter to the number of cores.
   * 
   * *   If you want to set this parameter to specifications with more than 1,024 compute units (CUs), you must submit a ticket.
   * 
   * *   This parameter is invalid for Hologres Shared Cluster instances.
   * 
   * *   The specifications of 8-core 32GB (number of compute nodes: 1) are for trial use only and cannot be used for production.
   * 
   * @example
   * 128
   */
  cpu?: number;
  /**
   * @remarks
   * 是否开启ServerlessComputing
   * 
   * @example
   * true
   */
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * > This parameter is required only for virtual warehouse instances.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The specification change type. Valid values:
   * 
   * *   UPGRADE
   * *   DOWNGRADE
   * 
   * > 
   * 
   * *   If you set this parameter to UPGRADE, the new specifications must be higher than the original specifications. You must configure at least one of the cpu, storageSize, and coldStorageSize parameters. If you leave a parameter empty, the related configuration remains unchanged.
   * 
   * *   If you set this parameter to DOWNGRADE, the new specifications must be lower than the original specifications. You must configure at least one of the cpu, storageSize, and coldStorageSize parameters. If you leave a parameter empty, the related configuration remains unchanged.
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
   * > Ignore this parameter for pay-as-you-go instances.
   * 
   * @example
   * 1000G
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

