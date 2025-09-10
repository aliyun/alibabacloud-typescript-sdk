// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 18b3be23-b7b0-4d45-91bc-d0c331aa****
   */
  alarmId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 20201024
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * @example
   * Quantity
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 20201020
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      endTime: 'number',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

