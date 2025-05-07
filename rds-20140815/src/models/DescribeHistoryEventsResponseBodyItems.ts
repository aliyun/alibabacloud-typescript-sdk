// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryEventsResponseBodyItemsData } from "./DescribeHistoryEventsResponseBodyItemsData";


export class DescribeHistoryEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: DescribeHistoryEventsResponseBodyItemsData;
  /**
   * @remarks
   * The task ID
   * 
   * @example
   * 4309
   */
  id?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * loanBill
   */
  source?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  specversion?: string;
  /**
   * @remarks
   * The name of the pending event.
   * 
   * @example
   * QiTian
   */
  subject?: string;
  /**
   * @remarks
   * The amount of time that has elapsed from the start time of the query. Unit: seconds.
   * 
   * @example
   * 1675232573125
   */
  time?: string;
  /**
   * @remarks
   * The event type. For more information, see [View the event history of an ApsaraDB RDS instance](https://help.aliyun.com/document_detail/129759.html).
   * 
   * @example
   * host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      region: 'Region',
      source: 'Source',
      specversion: 'Specversion',
      subject: 'Subject',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHistoryEventsResponseBodyItemsData,
      id: 'string',
      region: 'string',
      source: 'string',
      specversion: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

