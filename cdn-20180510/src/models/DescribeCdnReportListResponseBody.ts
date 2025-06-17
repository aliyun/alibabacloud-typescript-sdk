// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the report that is queried.
   * 
   * @example
   * "data":[{"reportId":1,"deliver":{"report":{"title":"DomainPvUv","format":"chart","shape":"line","xAxis":"ds","yAxis":"cnt","legend":"cnt_type","header":["ds","cnt_type","cnt"]}}}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

