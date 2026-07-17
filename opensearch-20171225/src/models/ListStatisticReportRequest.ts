// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatisticReportRequest extends $dara.Model {
  /**
   * @remarks
   * The fields to query. Specify the fields in the columns="pv,uv,ipv" format. For more information, see [Metrics of statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * 
   * @example
   * pv,uv
   */
  columns?: string;
  /**
   * @remarks
   * The end timestamp, in seconds. The default value is the current timestamp.
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
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions, in the k1:v1,k2:v2 format. Valid values:
   * 
   * - experimentSerialNumber: the globally unique serial number of the experiment.
   * 
   * - sceneTag: the tag of the scenario.
   * 
   * - bizType: the business identity.
   * 
   * - modelId: the ID of the algorithm model.
   * 
   * @example
   * bizType:test,sceneTag:myTag
   */
  query?: string;
  /**
   * @remarks
   * The start timestamp, in seconds.
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

