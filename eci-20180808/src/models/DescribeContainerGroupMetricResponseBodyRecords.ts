// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupMetricResponseBodyRecordsCPU } from "./DescribeContainerGroupMetricResponseBodyRecordsCpu";
import { DescribeContainerGroupMetricResponseBodyRecordsContainers } from "./DescribeContainerGroupMetricResponseBodyRecordsContainers";
import { DescribeContainerGroupMetricResponseBodyRecordsDisk } from "./DescribeContainerGroupMetricResponseBodyRecordsDisk";
import { DescribeContainerGroupMetricResponseBodyRecordsFilesystem } from "./DescribeContainerGroupMetricResponseBodyRecordsFilesystem";
import { DescribeContainerGroupMetricResponseBodyRecordsMemory } from "./DescribeContainerGroupMetricResponseBodyRecordsMemory";
import { DescribeContainerGroupMetricResponseBodyRecordsNetwork } from "./DescribeContainerGroupMetricResponseBodyRecordsNetwork";


export class DescribeContainerGroupMetricResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of vCPUs.
   */
  CPU?: DescribeContainerGroupMetricResponseBodyRecordsCPU;
  /**
   * @remarks
   * The monitoring data of containers.
   */
  containers?: DescribeContainerGroupMetricResponseBodyRecordsContainers[];
  /**
   * @remarks
   * The monitoring data of disks.
   */
  disk?: DescribeContainerGroupMetricResponseBodyRecordsDisk[];
  /**
   * @remarks
   * The monitoring data of file system partitions.
   */
  filesystem?: DescribeContainerGroupMetricResponseBodyRecordsFilesystem[];
  /**
   * @remarks
   * The monitoring data of the memory.
   */
  memory?: DescribeContainerGroupMetricResponseBodyRecordsMemory;
  /**
   * @remarks
   * The monitoring data of the network.
   */
  network?: DescribeContainerGroupMetricResponseBodyRecordsNetwork;
  /**
   * @remarks
   * The time when the monitoring data entry was collected. The time follows the RFC 3339 format.
   * 
   * @example
   * 2021-08-25T16:22:00.000+08:00
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      containers: 'Containers',
      disk: 'Disk',
      filesystem: 'Filesystem',
      memory: 'Memory',
      network: 'Network',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeContainerGroupMetricResponseBodyRecordsCPU,
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsContainers },
      disk: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsDisk },
      filesystem: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsFilesystem },
      memory: DescribeContainerGroupMetricResponseBodyRecordsMemory,
      network: DescribeContainerGroupMetricResponseBodyRecordsNetwork,
      timestamp: 'string',
    };
  }

  validate() {
    if(this.CPU && typeof (this.CPU as any).validate === 'function') {
      (this.CPU as any).validate();
    }
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    if(Array.isArray(this.filesystem)) {
      $dara.Model.validateArray(this.filesystem);
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

