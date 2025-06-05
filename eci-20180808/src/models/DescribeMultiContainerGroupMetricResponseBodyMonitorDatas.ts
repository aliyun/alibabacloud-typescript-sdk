// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords";


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatas extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * @example
   * eci-bp15oolgorelvhfb****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The details about monitoring data.
   */
  records?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords[];
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      records: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

