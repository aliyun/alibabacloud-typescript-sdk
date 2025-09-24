// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansDeductLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-01-05 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * spn-XXXXXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance ID based on which the data is queried. Valid values:
   * 
   * *   spn: queries data based on the ID of the savings plan instance.
   * *   product: queries data based on the ID of the cloud service instance.
   * 
   * @example
   * spn
   */
  instanceType?: string;
  /**
   * @remarks
   * The language of the return data. Valid values:
   * 
   * *   ZH: Chinese
   * *   EN: English
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

