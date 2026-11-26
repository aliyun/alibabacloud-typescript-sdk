// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax extends $dara.Model {
  /**
   * @remarks
   * The maximum storage usage status of segment nodes. Valid values:
   * 
   * - **critical**: Instance storage usage is greater than or equal to 90%, and the instance will be locked.
   * - **warning**: Instance storage usage is greater than or equal to 80% and less than 90%.
   * - **healthy**: Instance storage usage is less than 80%, indicating a healthy storage status.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the maximum storage usage of segment nodes.
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
   * The connection status of the instance. Valid values:
   * 
   * - **critical**: The connection usage of the instance is greater than 95%. The status is displayed in red in the console.
   * - **warning**: The connection usage of the instance is greater than 90% and less than or equal to 95%. The status is displayed in yellow in the console.
   * - **healthy**: The connection usage of the instance is less than or equal to 90%. The status is displayed in green in the console.
   * 
   * > The connection usage of the instance is the maximum connection usage among all master nodes and segment nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the instance connection usage, which is the maximum connection usage among all master nodes and segment nodes.
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
   * Instance storage status of the instance. Valid values:
   * 
   * - **critical**: Instance storage usage of the instance is greater than or equal to 90%. The status is displayed in red in the console, and the instance will be locked.
   * - **warning**: Instance storage usage of the instance is greater than or equal to 70% and less than 90%. The status is displayed in yellow in the console.
   * - **healthy**: Instance storage usage of the instance is less than 70%. The status is displayed in green in the console, indicating a healthy storage status.
   * 
   * > Instance storage usage of the instance is the average storage usage of all segment nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the instance storage usage, which is the average storage usage of all segment nodes.
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
   * Instance storage usage status of the instance. Valid values:
   * 
   * - **critical**: Instance storage usage of the instance is greater than or equal to 90%, and the instance will be locked.
   * - **warning**: Instance storage usage of the instance is greater than or equal to 70% and less than 90%.
   * - **healthy**: Instance storage usage of the instance is less than 70%, indicating a healthy storage status.
   * 
   * > Instance storage usage of the instance is the average storage usage of all segment nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the instance storage usage, which is the average storage usage of all segment nodes.
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
   * The total amount of cold data stored. Unit: GB.
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
   * The total amount of hot data stored. Unit: GB.
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
   * The total amount of instance storage data. Unit: GB.
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
   * The maximum storage usage status of master nodes. Valid values:
   * 
   * - **critical**: Instance storage usage is greater than or equal to 90%, and the instance will be locked.
   * - **warning**: Instance storage usage is greater than or equal to 70% and less than 90%.
   * - **healthy**: Instance storage usage is less than 70%, indicating a healthy storage status.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the maximum storage usage of master nodes.
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
   * The availability status of master nodes. Valid values:
   * 
   * - **critical**: Both the primary and secondary nodes are unavailable. The status is displayed in red in the console.
   * - **warning**: The primary or secondary node is unavailable. The status is displayed in yellow in the console.
   * - **healthy**: All nodes are available. The status is displayed in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the availability status of master nodes. Valid values:
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
   * The availability status of segment nodes. Valid values:
   * 
   * - **critical**: Both the primary and secondary nodes are unavailable. The status is displayed in red in the console.
   * - **warning**: 50% or more of the nodes are unavailable. The status is displayed in yellow in the console.
   * - **healthy**: All nodes are available. The status is displayed in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the availability status of segment nodes.
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
   * - **critical**: At least one master node or segment node is unavailable. The status is displayed in red in the console.
   * - **healthy**: All nodes are available. The status is displayed in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the instance health status. Valid values:
   * 
   * - **1**: healthy.
   * - **0**: critical.
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
   * The connection health status of master nodes. Valid values:
   * 
   * - **critical**: The connection usage of master nodes is greater than or equal to 95%. The status is displayed in red in the console.
   * - **warning**: The connection usage of master nodes is greater than or equal to 90% and less than 95%. The status is displayed in yellow in the console.
   * - **healthy**: The connection usage of master nodes is less than 90%. The status is displayed in green in the console.
   * 
   * > The connection usage of master nodes is the maximum connection usage among all master nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the connection usage of master nodes, which is the maximum connection usage among all master nodes.
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
   * The health status of master nodes. Valid values:
   * 
   * - **critical**: At least one primary or secondary master node is unavailable. The status is displayed in red in the console.
   * - **healthy**: All master nodes are available. The status is displayed in green in the console.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the master node health status. Valid values:
   * 
   * - **1**: healthy.
   * - **0**: critical.
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
   * The connection health status of segment nodes. Valid values:
   * 
   * - **critical**: The connection usage of segment nodes is greater than or equal to 95%. The status is displayed in red in the console.
   * - **warning**: The connection usage of segment nodes is greater than or equal to 90% and less than 95%. The status is displayed in yellow in the console.
   * - **healthy**: The connection usage of segment nodes is less than 90%. The status is displayed in green in the console.
   * 
   * > The connection usage of segment nodes is the maximum connection usage among all segment nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the connection usage of segment nodes, which is the maximum connection usage among all segment nodes.
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
   * Instance storage status of segment nodes. Valid values:
   * 
   * - **critical**: Instance storage usage of segment nodes is greater than or equal to 90%. The status is displayed in red in the console, and the instance will be locked.
   * - **warning**: Instance storage usage of segment nodes is greater than or equal to 80% and less than 90%. The status is displayed in yellow in the console.
   * - **healthy**: Instance storage usage of segment nodes is less than 80%. The status is displayed in green in the console, indicating a healthy storage status.
   * 
   * > Instance storage usage of segment nodes is the maximum storage usage among all segment nodes.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The metric value of the maximum storage usage of segment nodes.
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
   * The maximum storage usage of compute nodes in the instance, which is the maximum storage usage among all segment nodes in the instance.
   * 
   * > This value is returned only for instances in elastic storage mode.
   */
  adbgpSegmentDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax;
  /**
   * @remarks
   * The connection status of the instance.
   */
  adbpgConnectionStatus?: DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus;
  /**
   * @remarks
   * The instance storage status.
   * 
   * > This value is returned only for instances in the elastic storage pattern.
   */
  adbpgDiskStatus?: DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus;
  /**
   * @remarks
   * The instance storage usage.
   * 
   * > This value is returned only for instances in the elastic storage pattern.
   */
  adbpgDiskUsagePercent?: DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent;
  /**
   * @remarks
   * The total amount of cold data stored.
   */
  adbpgInstanceColdDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb;
  /**
   * @remarks
   * The total amount of hot data stored.
   */
  adbpgInstanceHotDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb;
  /**
   * @remarks
   * The total amount of instance storage data.
   */
  adbpgInstanceTotalDataGb?: DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb;
  /**
   * @remarks
   * The maximum storage usage of coordinator nodes in the instance, which is the maximum storage usage among all master nodes in the instance.
   * 
   * > This value is returned only for instances in elastic storage mode.
   */
  adbpgMasterDiskUsagePercentMax?: DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax;
  /**
   * @remarks
   * The status of coordinator nodes, namely the availability status of master nodes.
   */
  adbpgMasterStatus?: DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus;
  /**
   * @remarks
   * The status of compute nodes, namely the availability status of segment nodes.
   */
  adbpgSegmentStatus?: DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus;
  /**
   * @remarks
   * The health status of the instance.
   */
  adbpgStatus?: DescribeHealthStatusResponseBodyStatusAdbpgStatus;
  /**
   * @remarks
   * The connection health status of coordinator nodes, namely master nodes.
   */
  nodeMasterConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus;
  /**
   * @remarks
   * The health status of coordinator nodes, namely master nodes.
   */
  nodeMasterStatus?: DescribeHealthStatusResponseBodyStatusNodeMasterStatus;
  /**
   * @remarks
   * The connection health status of compute nodes, namely segment nodes.
   */
  nodeSegmentConnectionStatus?: DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus;
  /**
   * @remarks
   * The storage status of compute nodes, namely segment nodes.
   * 
   * > This value is returned only for instances in elastic storage mode.
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
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D97B4191-104D-10CE-8BC5-53**********
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed performance monitoring information, which consists of the metric name, status, and metric value. Monitoring information is returned only for the metrics specified in the **Key** request parameter. For example, if the **Key** parameter contains only **adbpg_status**, only the monitoring information for **adbpg_status** is returned.
   * 
   * For more information about performance metrics, see [Performance metrics](https://help.aliyun.com/document_detail/86943.html).
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

