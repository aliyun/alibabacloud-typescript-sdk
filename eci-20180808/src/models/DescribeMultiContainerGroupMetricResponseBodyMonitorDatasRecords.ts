// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCpu";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork";


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of vCPUs.
   */
  CPU?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU;
  /**
   * @remarks
   * The monitoring data of containers.
   */
  containers?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers[];
  /**
   * @remarks
   * The monitoring data of disks.
   */
  disk?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk[];
  /**
   * @remarks
   * The monitoring data of file system partitions.
   */
  filesystem?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem[];
  /**
   * @remarks
   * The monitoring data of the memory.
   */
  memory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory;
  /**
   * @remarks
   * The monitoring data of the network.
   */
  network?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork;
  /**
   * @remarks
   * The time when the entry of monitoring data was collected. The time follows the RFC 3339 format.
   * 
   * @example
   * 2019-12-19T02:31:54Z
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
      CPU: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU,
      containers: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers },
      disk: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk },
      filesystem: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem },
      memory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory,
      network: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork,
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

