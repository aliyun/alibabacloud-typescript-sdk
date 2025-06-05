// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCpu";
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory";


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers extends $dara.Model {
  /**
   * @remarks
   * The vCPU monitoring data of the container.
   */
  CPU?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU;
  /**
   * @remarks
   * The memory monitoring data of the container.
   */
  memory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU,
      memory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory,
      name: 'string',
    };
  }

  validate() {
    if(this.CPU && typeof (this.CPU as any).validate === 'function') {
      (this.CPU as any).validate();
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

