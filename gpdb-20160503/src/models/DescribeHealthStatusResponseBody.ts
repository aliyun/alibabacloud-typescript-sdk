// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the maximum storage usage among all compute nodes. Valid values:
   * 
   * *   **critical**: The compute node storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The compute node storage usage is greater than or equal to 80% and less than 90%.
   * *   **healthy**: The compute node storage usage is less than 80%.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum compute node storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.52
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus extends $dara.Model {
  /**
   * @remarks
   * The connection health status of the instance. Valid values:
   * 
   * *   **critical**: The instance connection usage is greater than 95%. In this case, this metric is marked in red in the console.
   * *   **warning**: The instance connection usage is greater than 90% and less than or equal to 95%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The instance connection usage is less than or equal to 90%. In this case, this metric is marked in green in the console.
   * 
   * >  The instance connection usage is the maximum connection usage among all the coordinator and compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance connection usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.71
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus extends $dara.Model {
  /**
   * @remarks
   * The storage status of the instance. Valid values:
   * 
   * *   **critical**: The instance storage usage is greater than or equal to 90%. In this case, this metric is marked in red in the console and the instance is locked.
   * *   **warning**: The instance storage usage is greater than or equal to 70% and less than 90%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The instance storage usage is less than 70%. In this case, this metric is marked in green in the console.
   * 
   * >  The instance storage usage is the average storage usage of all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.52
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the storage usage of the instance. Valid values:
   * 
   * *   **critical**: The instance storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The instance storage usage is greater than or equal to 70% and less than 90%.
   * *   **healthy**: The instance storage usage is less than 70%.
   * 
   * >  The instance storage usage is the average storage usage of all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.52
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb extends $dara.Model {
  /**
   * @remarks
   * The total amount of cold data storage. Unit: GB.
   * 
   * @example
   * 0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb extends $dara.Model {
  /**
   * @remarks
   * The total amount of hot data storage. Unit: GB.
   * 
   * @example
   * 4.1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb extends $dara.Model {
  /**
   * @remarks
   * The total amount of data storage of the instance. Unit: GB.
   * 
   * @example
   * 4.1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax extends $dara.Model {
  /**
   * @remarks
   * The status corresponding to the maximum storage usage of the coordinator node. Valid values:
   * 
   * *   **critical**: The coordinator node storage usage is greater than or equal to 90%. In this case, the instance is locked.
   * *   **warning**: The coordinator node storage usage is greater than or equal to 70% and less than 90%.
   * *   **healthy**: The coordinator node storage usage is less than 70%.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum coordinator node storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.34
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus extends $dara.Model {
  /**
   * @remarks
   * The availability status of the coordinator node. Valid values:
   * 
   * *   **critical**: Both the primary and standby coordinator nodes are unavailable. In this case, this metric is marked in red in the console.
   * *   **warning**: The primary or standby coordinator node is unavailable. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: Both the primary and standby coordinator nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node availability status. Valid values:
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus extends $dara.Model {
  /**
   * @remarks
   * The availability status of compute nodes. Valid values:
   * 
   * *   **critical**: All the primary and secondary compute nodes are unavailable. In this case, this metric is marked in red in the console.
   * *   **warning**: Fifty percent or more than fifty percent of compute nodes are unavailable. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: All compute nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of compute node availability status.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusAdbpgStatus extends $dara.Model {
  /**
   * @remarks
   * The health status of the instance. Valid values:
   * 
   * *   **critical**: The coordinator node or a compute node is unavailable. In this case, this metric is marked in red in the console.
   * *   **healthy**: All nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of instance health status. Valid values:
   * 
   * *   **1**: healthy
   * *   **0**: critical
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus extends $dara.Model {
  /**
   * @remarks
   * The connection health status of the coordinator node. Valid values:
   * 
   * *   **critical**: The coordinator node connection usage is greater than 95%. In this case, this metric is marked in red in the console.
   * *   **warning**: The coordinator node connection usage is greater than or equal to 90% and less than 95%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The coordinator node connection usage is less than 90%. In this case, this metric is marked in green in the console.
   * 
   * >  The coordinator node connection usage is the maximum connection usage of the coordinator node.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node connection usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.71
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeMasterStatus extends $dara.Model {
  /**
   * @remarks
   * The health status of the coordinator node. Valid values:
   * 
   * *   **critical**: The primary or standby coordinator node is unavailable. In this case, this metric is marked in red in the console.
   * *   **healthy**: Both the primary and standby coordinator nodes are available. In this case, this metric is marked in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of coordinator node health status. Valid values:
   * 
   * *   **1**: healthy
   * *   **0**: critical
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus extends $dara.Model {
  /**
   * @remarks
   * The connection health status of compute nodes. Valid values:
   * 
   * *   **critical**: The compute node connection usage is greater than or equal to 95%. In this case, this metric is marked in red in the console.
   * *   **warning**: The compute node connection usage is greater than or equal to 90% and less than 95%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The compute node connection usage is less than 90%. In this case, this metric is marked in green in the console.
   * 
   * >  The compute node connection usage is the maximum connection usage among all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum compute node connection usage.
   * 
   * Unit: %.
   * 
   * @example
   * 0.48
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus extends $dara.Model {
  /**
   * @remarks
   * The storage status of compute nodes. Valid values:
   * 
   * *   **critical**: The compute node storage usage is greater than or equal to 90%. In this case, this metric is marked in red in the console and the instance is locked.
   * *   **warning**: The compute node storage usage is greater than or equal to 80% and less than 90%. In this case, this metric is marked in yellow in the console.
   * *   **healthy**: The compute node storage usage is less than 80%. In this case, this metric is marked in green in the console.
   * 
   * >  The compute node storage usage is the maximum storage usage among all compute nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of maximum compute node storage usage.
   * 
   * Unit: %.
   * 
   * @example
   * 1.52
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyStatus extends $dara.Model {
  /**
   * @remarks
   * The information of maximum compute node storage usage.
   * 
   * >  This parameter value is returned only for instances in elastic storage mode.
   */
  adbgpSegmentDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax;
  /**
   * @remarks
   * The information of instance connection health status.
   */
  adbpgConnectionStatus?: DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus;
  /**
   * @remarks
   * The information of instance storage status.
   * 
   * >  This parameter value is returned only for instances in elastic storage mode.
   */
  adbpgDiskStatus?: DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus;
  /**
   * @remarks
   * The information of instance storage usage.
   * 
   * >  This parameter value is returned only for instances in elastic storage mode.
   */
  adbpgDiskUsagePercent?: DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent;
  /**
   * @remarks
   * The total amount of cold data storage.
   */
  adbpgInstanceColdDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb;
  /**
   * @remarks
   * The total amount of hot data storage.
   */
  adbpgInstanceHotDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb;
  /**
   * @remarks
   * The total amount of data storage of the instance.
   */
  adbpgInstanceTotalDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb;
  /**
   * @remarks
   * The information of maximum coordinator node storage usage.
   * 
   * >  This parameter value is returned only for instances in elastic storage mode.
   */
  adbpgMasterDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax;
  /**
   * @remarks
   * The information of coordinator node availability status.
   */
  adbpgMasterStatus?: DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus;
  /**
   * @remarks
   * The information of compute node availability status.
   */
  adbpgSegmentStatus?: DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus;
  /**
   * @remarks
   * The information of instance health status.
   */
  adbpgStatus?: DescribeHealthStatusResponseBodyStatusAdbpgStatus;
  /**
   * @remarks
   * The information of coordinator node connection health status.
   */
  nodeMasterConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus;
  /**
   * @remarks
   * The information of coordinator node health status.
   */
  nodeMasterStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterStatus;
  /**
   * @remarks
   * The information of compute node connection health status.
   */
  nodeSegmentConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus;
  /**
   * @remarks
   * The information of compute node storage status.
   * 
   * >  This parameter value is returned only for instances in elastic storage mode.
   */
  nodeSegmentDiskStatus?: DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus;
  static names(): { [key: string]: string } {
    return {
      adbgpSegmentDiskUsagePercentMax: 'adbgp_segment_disk_usage_percent_max',
      adbpgConnectionStatus: 'adbpg_connection_status',
      adbpgDiskStatus: 'adbpg_disk_status',
      adbpgDiskUsagePercent: 'adbpg_disk_usage_percent',
      adbpgInstanceColdDataGb: 'adbpg_instance_cold_data_gb',
      adbpgInstanceHotDataGb: 'adbpg_instance_hot_data_gb',
      adbpgInstanceTotalDataGb: 'adbpg_instance_total_data_gb',
      adbpgMasterDiskUsagePercentMax: 'adbpg_master_disk_usage_percent_max',
      adbpgMasterStatus: 'adbpg_master_status',
      adbpgSegmentStatus: 'adbpg_segment_status',
      adbpgStatus: 'adbpg_status',
      nodeMasterConnectionStatus: 'node_master_connection_status',
      nodeMasterStatus: 'node_master_status',
      nodeSegmentConnectionStatus: 'node_segment_connection_status',
      nodeSegmentDiskStatus: 'node_segment_disk_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbgpSegmentDiskUsagePercentMax: DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax,
      adbpgConnectionStatus: DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus,
      adbpgDiskStatus: DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus,
      adbpgDiskUsagePercent: DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent,
      adbpgInstanceColdDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb,
      adbpgInstanceHotDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb,
      adbpgInstanceTotalDataGb: DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb,
      adbpgMasterDiskUsagePercentMax: DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax,
      adbpgMasterStatus: DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus,
      adbpgSegmentStatus: DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus,
      adbpgStatus: DescribeHealthStatusResponseBodyStatusAdbpgStatus,
      nodeMasterConnectionStatus: DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus,
      nodeMasterStatus: DescribeHealthStatusResponseBodyStatusNodeMasterStatus,
      nodeSegmentConnectionStatus: DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus,
      nodeSegmentDiskStatus: DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus,
    };
  }

  validate() {
    if(this.adbgpSegmentDiskUsagePercentMax && typeof (this.adbgpSegmentDiskUsagePercentMax as any).validate === 'function') {
      (this.adbgpSegmentDiskUsagePercentMax as any).validate();
    }
    if(this.adbpgConnectionStatus && typeof (this.adbpgConnectionStatus as any).validate === 'function') {
      (this.adbpgConnectionStatus as any).validate();
    }
    if(this.adbpgDiskStatus && typeof (this.adbpgDiskStatus as any).validate === 'function') {
      (this.adbpgDiskStatus as any).validate();
    }
    if(this.adbpgDiskUsagePercent && typeof (this.adbpgDiskUsagePercent as any).validate === 'function') {
      (this.adbpgDiskUsagePercent as any).validate();
    }
    if(this.adbpgInstanceColdDataGb && typeof (this.adbpgInstanceColdDataGb as any).validate === 'function') {
      (this.adbpgInstanceColdDataGb as any).validate();
    }
    if(this.adbpgInstanceHotDataGb && typeof (this.adbpgInstanceHotDataGb as any).validate === 'function') {
      (this.adbpgInstanceHotDataGb as any).validate();
    }
    if(this.adbpgInstanceTotalDataGb && typeof (this.adbpgInstanceTotalDataGb as any).validate === 'function') {
      (this.adbpgInstanceTotalDataGb as any).validate();
    }
    if(this.adbpgMasterDiskUsagePercentMax && typeof (this.adbpgMasterDiskUsagePercentMax as any).validate === 'function') {
      (this.adbpgMasterDiskUsagePercentMax as any).validate();
    }
    if(this.adbpgMasterStatus && typeof (this.adbpgMasterStatus as any).validate === 'function') {
      (this.adbpgMasterStatus as any).validate();
    }
    if(this.adbpgSegmentStatus && typeof (this.adbpgSegmentStatus as any).validate === 'function') {
      (this.adbpgSegmentStatus as any).validate();
    }
    if(this.adbpgStatus && typeof (this.adbpgStatus as any).validate === 'function') {
      (this.adbpgStatus as any).validate();
    }
    if(this.nodeMasterConnectionStatus && typeof (this.nodeMasterConnectionStatus as any).validate === 'function') {
      (this.nodeMasterConnectionStatus as any).validate();
    }
    if(this.nodeMasterStatus && typeof (this.nodeMasterStatus as any).validate === 'function') {
      (this.nodeMasterStatus as any).validate();
    }
    if(this.nodeSegmentConnectionStatus && typeof (this.nodeSegmentConnectionStatus as any).validate === 'function') {
      (this.nodeSegmentConnectionStatus as any).validate();
    }
    if(this.nodeSegmentDiskStatus && typeof (this.nodeSegmentDiskStatus as any).validate === 'function') {
      (this.nodeSegmentDiskStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D97B4191-104D-10CE-8BC5-53**********
   */
  requestId?: string;
  /**
   * @remarks
   * The queried performance metrics. Each performance metric consists of the parameter name, status, and metric value. The metric information is returned only for the performance parameters specified by **Key**. For example, if you set **Key** to **adbpg_status**, only the metric information of **adbpg_status** is returned.
   * 
   * For more information about performance parameters, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   * 
   * @example
   * {"node_master_connection_status":{"Status":"healthy","Value":1.6}}
   */
  status?: DescribeHealthStatusResponseBodyStatus;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      status: DescribeHealthStatusResponseBodyStatus,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

