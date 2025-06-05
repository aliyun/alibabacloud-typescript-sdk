// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupMetricResponseBodyRecords } from "./DescribeContainerGroupMetricResponseBodyRecords";


export class DescribeContainerGroupMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eci-bp1dqpye03ke5s6p****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The monitoring data of the elastic container instance.
   */
  records?: DescribeContainerGroupMetricResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D81A4A13-6DCC-4579-AC62-90A6C3EC7BBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      records: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecords },
      requestId: 'string',
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

