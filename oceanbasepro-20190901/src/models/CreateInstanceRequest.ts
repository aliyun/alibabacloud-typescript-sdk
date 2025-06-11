// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic renewal.   
   * This parameter is valid only when the ChargeType parameter is set to PrePaid. Valid values: 
   * - true: enables automatic renewal for the instance.   
   * - false: disables automatic renewal for the instance. This is the default value.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The automatic renewal period of the instance. This parameter is required when the AutoRenew parameter is set to true. Valid values:  
   * - If the PeriodUnit parameter is set to Year: "1", "2", and "3".   
   * - If the PeriodUnit parameter is set to Month: "1", "2", "3", "6", and "12".
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:  
   * - PrePay: the subscription billing method. You must ensure that the remaining balance or credit balance of your account can cover the cost of the subscription. Otherwise, you will receive an InvalidPayMethod error. 
   * - PostPay: the pay-as-you-go billing method. This is the default value. By default, fees are charged on an hourly basis.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePay
   */
  chargeType?: string;
  /**
   * @example
   * x86
   */
  cpuArch?: string;
  /**
   * @remarks
   * The size of the storage space,in GB.    
   * The limits on the storage space vary with the cluster specifications:   
   * - 8C32GB: 100 GB to 10000 GB   
   * - 14C70GB: 200 GB to 10000 GB   
   * - 30C180GB: 400 GB to 10000 GB   
   * - 62C400GB: 800 GB to 10000 GB    
   * The preceding minimum storage space sizes are the default storage space sizes of the corresponding cluster specification plans.
   * 
   * @example
   * 200
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the storage disk where the cluster is deployed. This parameter takes effect only for Standard Cluster Edition (Cloud Disk).
   * Valid values:
   * - cloud_essd_pl1: ESSD PL1.
   * - cloud_essd_pl0: ESSD PL0. Default value: cloud_essd_pl1.
   * 
   * @example
   * cloud_essd_pl1
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request. Default value: false. Valid values:
   * - true: Only a dry-run request is sent and the instance is not created. If the dry run succeeds, DryRunResult=true is returned. If the dry run fails, an error code is returned.
   * - false: The actual request is sent and no dry run is performed. The instance is created if the requirements are met. By default, the DryRunResult parameter returns false if you set DryRun to false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The specifications of the cluster.     
   * You can specify one of the following four plans:   
   *  - 8C32GB: indicates 8 CPU cores and 32 GB of memory.    
   *  - 14C70GB: indicates 14 CPU cores and 70 GB of memory. This is the default value.
   * - 30C180GB: indicates 30 CPU cores and 180 GB of memory.     
   * - 62C400GB: indicates 62 CPU cores and 400 GB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 14C70GB
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the OceanBase cluster.    
   * It must be 1 to 20 characters in length.   
   * If this parameter is not specified, the value is the instance ID of the cluster by default.
   * 
   * @example
   * amap_aos_tx_ob
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether to enable the control group feature.
   * Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  isolationOptimization?: string;
  /**
   * @remarks
   * OceanBase Server version number.
   * 
   * @example
   * 2.2.77
   */
  obVersion?: string;
  /**
   * @remarks
   * The valid duration of the purchased resources. The unit is specified by the PeriodUnit parameter.   
   * This parameter is valid and required only when the InstanceChargeType parameter is set to PrePaid.      
   * Valid values:     
   * - When the PeriodUnit parameter is set to Month: "1", "2", "3", "4", "5", "6", "7", "8", "9". 
   * - When the PeriodUnit parameter is set to Year: "1", "2", "3".
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the valid duration of the purchased resources.     
   * Valid value for subscription: Month or Year.
   * Default value: Month for subscription, and Hour for pay-as-you-go.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Primary instance ID.
   * 
   * @example
   * ob3h8ytroxxxxx
   */
  primaryInstance?: string;
  /**
   * @remarks
   * Primary instance region.
   * 
   * @example
   * cn-hangzhou
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The number of full-featured replicas.
   * - 3F: three full-featured replicas.
   * - 2F1L: two full-featured replicas and one log replica.
   * - 2F1A: two full-featured replicas and one arbitration service.
   * - ApsaraDB for OceanBase earlier than V4.1 supports 3F and 2F1L.
   * - ApsaraDB for OceanBase V4.1 or later supports 3F and 2F1A.
   * - An ApsaraDB for OceanBase instance deployed across three zones supports only 3F.
   * - An ApsaraDB for OceanBase instance deployed across two zones supports 2F1A or 2F1L, depending on the version.
   * - An ApsaraDB for OceanBase instance deployed in a single zone supports 3F, 2F1A, or 2F1L, depending on the version.
   * 
   * @example
   * 3F
   */
  replicaMode?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The series of the OceanBase cluster. Valid values:    
   * - normal: Standard Cluster Edition (Cloud Disk). This is the default value.
   * - normal_ssd: Standard Cluster Edition (Local Disk).
   * - history: History Database Cluster Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  series?: string;
  /**
   * @remarks
   * The ID of the zone to which the instance belongs.   
   * For more information about how to obtain the list of zones, see [DescribeZones](https://help.aliyun.com/document_detail/25610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j
   */
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      cpuArch: 'CpuArch',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      isolationOptimization: 'IsolationOptimization',
      obVersion: 'ObVersion',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryInstance: 'PrimaryInstance',
      primaryRegion: 'PrimaryRegion',
      replicaMode: 'ReplicaMode',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      cpuArch: 'string',
      diskSize: 'number',
      diskType: 'string',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceName: 'string',
      isolationOptimization: 'string',
      obVersion: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryInstance: 'string',
      primaryRegion: 'string',
      replicaMode: 'string',
      resourceGroupId: 'string',
      series: 'string',
      zones: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

