// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatisticReportRequest extends $dara.Model {
  /**
   * @remarks
   * The fields to query. Set this parameter in the format of columns="pv,uv,ipv". For more information, see [Metrics of statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * 
   * @example
   * pv,uv
   */
  columns?: string;
  /**
   * @remarks
   * The end timestamp of the query. By default, the end time is the current time. Unit: seconds.
   * 
   * @example
   * 1582646399
   */
  endTime?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions. Set this parameter in the format of k1:v1,k2:v2. Valid values:
   * 
   * *   experimentSerialNumber: the globally unique sequence number of the test
   * *   sceneTag: the tag of the test scenario
   * *   bizType: the type of the business
   * *   modelId: the ID of the algorithm model
   * 
   * @example
   * bizType:test,sceneTag:myTag
   */
  query?: string;
  /**
   * @remarks
   * The start timestamp of the query. Unit: seconds.
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
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

