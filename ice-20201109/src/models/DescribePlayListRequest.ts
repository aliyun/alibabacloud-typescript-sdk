// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1676170500011
   */
  beginTs?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1682474405173
   */
  endTs?: string;
  /**
   * @example
   * FirstFrameDuration
   */
  orderName?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * vod
   */
  playType?: string;
  /**
   * @example
   * complete
   */
  status?: string;
  /**
   * @example
   * 0bc5e70516766285805381012d271e
   */
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

