// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class ScaleOutClusterRequestWorkerDataDisks extends $dara.Model {
  /**
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @example
   * 120
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
      category: 'category',
      encrypted: 'encrypted',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      category: 'string',
      encrypted: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @example
   * centos_7_7_x64_20G_alibase_20200426.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key_name
   */
  keyPair?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  rdsInstances?: string[];
  runtime?: Runtime;
  tags?: Tag[];
  taints?: Taint[];
  /**
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  userData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vswitchIds?: string[];
  /**
   * @example
   * true
   */
  workerAutoRenew?: boolean;
  /**
   * @example
   * 1
   */
  workerAutoRenewPeriod?: number;
  workerDataDisks?: ScaleOutClusterRequestWorkerDataDisks[];
  /**
   * @example
   * PrePaid
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workerInstanceTypes?: string[];
  /**
   * @example
   * 1
   */
  workerPeriod?: number;
  /**
   * @example
   * Month
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  workerSystemDiskCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 120
   */
  workerSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudMonitorFlags: 'cloud_monitor_flags',
      count: 'count',
      cpuPolicy: 'cpu_policy',
      imageId: 'image_id',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      rdsInstances: 'rds_instances',
      runtime: 'runtime',
      tags: 'tags',
      taints: 'taints',
      userData: 'user_data',
      vswitchIds: 'vswitch_ids',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerDataDisks: 'worker_data_disks',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerInstanceTypes: 'worker_instance_types',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudMonitorFlags: 'boolean',
      count: 'number',
      cpuPolicy: 'string',
      imageId: 'string',
      keyPair: 'string',
      loginPassword: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      runtime: Runtime,
      tags: { 'type': 'array', 'itemType': Tag },
      taints: { 'type': 'array', 'itemType': Taint },
      userData: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': ScaleOutClusterRequestWorkerDataDisks },
      workerInstanceChargeType: 'string',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    if(Array.isArray(this.workerDataDisks)) {
      $dara.Model.validateArray(this.workerDataDisks);
    }
    if(Array.isArray(this.workerInstanceTypes)) {
      $dara.Model.validateArray(this.workerInstanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

