// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatisticReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F65C8BB2-C14F-5983-888B-41C4E082D3BC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistical reports. Valid values:
   * 
   * *   For more information about the metrics in data quality reports, see the Upload behavioral data section of [Data collection 2.0](https://help.aliyun.com/document_detail/131547.html).
   * *   For more information about the metrics in application and A/B test reports, see the Core metrics section of [Metrics of statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * *   For more information about the metrics in query analysis reports, see the Query analysis metrics section of [Metrics of statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * 
   * @example
   * []
   */
  result?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 43
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

