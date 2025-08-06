// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  beginTs?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTs?: string;
  orderName?: string;
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  playType?: string;
  status?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTs: 'BeginTs',
      endTs: 'EndTs',
      orderName: 'OrderName',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playType: 'PlayType',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTs: 'string',
      endTs: 'string',
      orderName: 'string',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playType: 'string',
      status: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

