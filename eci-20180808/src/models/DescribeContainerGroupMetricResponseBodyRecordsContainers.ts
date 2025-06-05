// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupMetricResponseBodyRecordsContainersCPU } from "./DescribeContainerGroupMetricResponseBodyRecordsContainersCpu";
import { DescribeContainerGroupMetricResponseBodyRecordsContainersMemory } from "./DescribeContainerGroupMetricResponseBodyRecordsContainersMemory";


export class DescribeContainerGroupMetricResponseBodyRecordsContainers extends $dara.Model {
  /**
   * @remarks
   * The vCPU monitoring data of the container.
   */
  CPU?: DescribeContainerGroupMetricResponseBodyRecordsContainersCPU;
  /**
   * @remarks
   * The memory monitoring data of the container.
   */
  memory?: DescribeContainerGroupMetricResponseBodyRecordsContainersMemory;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * u1
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
      CPU: DescribeContainerGroupMetricResponseBodyRecordsContainersCPU,
      memory: DescribeContainerGroupMetricResponseBodyRecordsContainersMemory,
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

