// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax } from "./DescribeHealthStatusResponseBodyStatusAdbgpSegmentDiskUsagePercentMax";
import { DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus } from "./DescribeHealthStatusResponseBodyStatusAdbpgConnectionStatus";
import { DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus } from "./DescribeHealthStatusResponseBodyStatusAdbpgDiskStatus";
import { DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent } from "./DescribeHealthStatusResponseBodyStatusAdbpgDiskUsagePercent";
import { DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb } from "./DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb";
import { DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb } from "./DescribeHealthStatusResponseBodyStatusAdbpgInstanceHotDataGb";
import { DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb } from "./DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb";
import { DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax } from "./DescribeHealthStatusResponseBodyStatusAdbpgMasterDiskUsagePercentMax";
import { DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus } from "./DescribeHealthStatusResponseBodyStatusAdbpgMasterStatus";
import { DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus } from "./DescribeHealthStatusResponseBodyStatusAdbpgSegmentStatus";
import { DescribeHealthStatusResponseBodyStatusAdbpgStatus } from "./DescribeHealthStatusResponseBodyStatusAdbpgStatus";
import { DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus } from "./DescribeHealthStatusResponseBodyStatusNodeMasterConnectionStatus";
import { DescribeHealthStatusResponseBodyStatusNodeMasterStatus } from "./DescribeHealthStatusResponseBodyStatusNodeMasterStatus";
import { DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus } from "./DescribeHealthStatusResponseBodyStatusNodeSegmentConnectionStatus";
import { DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus } from "./DescribeHealthStatusResponseBodyStatusNodeSegmentDiskStatus";


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

