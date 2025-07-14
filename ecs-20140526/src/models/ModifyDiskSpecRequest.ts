// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequestPerformanceControlOptions extends $dara.Model {
  /**
   * @remarks
   * The new IOPS rate of the cloud disk. You can modify the IOPS rate of only cloud disks in dedicated block storage clusters.
   * 
   * Valid values: 900 to maximum IOPS per disk (with an increment of 100).
   * 
   * For more information, see [Block storage performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 2000
   */
  IOPS?: number;
  /**
   * @remarks
   * Specifies whether to reset the IOPS rate and throughput of the cloud disk. This parameter takes effect only when the cloud disk belongs to a dedicated block storage cluster.
   * 
   * After you specify this parameter, PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput do not take effect.
   * 
   * Set the value to All, which indicates that the IOPS rate and throughput of the cloud disk are reset to the initial values.
   * 
   * @example
   * All
   */
  recover?: string;
  /**
   * @remarks
   * The new throughput of the cloud disk. You can change the throughput of only cloud disks in dedicated block storage clusters. Unit: MB/s.
   * 
   * Valid values: 60 to maximum throughput per disk.
   * 
   * For more information, see [Block storage performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 200
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      IOPS: 'IOPS',
      recover: 'Recover',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IOPS: 'number',
      recover: 'string',
      throughput: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * cn-hangzhou-g
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The new disk category of the cloud disk. Valid values:
   * 
   * *   cloud_essd: ESSD
   * *   cloud_auto: ESSD AutoPL disk
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: utra disk
   * 
   * This parameter is empty by default, which indicates that the disk category is not changed.
   * 
   * > 
   * 
   * *   The preceding values are listed in descending order of disk performance. Subscription disks cannot be downgraded.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp131n0q38u3a4zi****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The disk performance specifications.
   */
  performanceControlOptions?: ModifyDiskSpecRequestPerformanceControlOptions;
  /**
   * @remarks
   * The new performance level of the ESSD. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk.
   * 
   * Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * >  This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the performance configurations of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      destinationZoneId: 'DestinationZoneId',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      performanceControlOptions: 'PerformanceControlOptions',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationZoneId: 'string',
      diskCategory: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      performanceControlOptions: ModifyDiskSpecRequestPerformanceControlOptions,
      performanceLevel: 'string',
      provisionedIops: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.performanceControlOptions && typeof (this.performanceControlOptions as any).validate === 'function') {
      (this.performanceControlOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

