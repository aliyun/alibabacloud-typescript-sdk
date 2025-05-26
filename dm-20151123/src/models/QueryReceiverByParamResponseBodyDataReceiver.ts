// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverByParamResponseBodyDataReceiver extends $dara.Model {
  /**
   * @remarks
   * Total number of recipient addresses
   * 
   * @example
   * 3
   */
  count?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * Description
   */
  desc?: string;
  /**
   * @remarks
   * Recipient list ID
   * 
   * @example
   * 0c910a7143044b1e116719eb678907b3
   */
  receiverId?: string;
  /**
   * @remarks
   * Recipient list alias
   * 
   * @example
   * 10***@example.com
   */
  receiversAlias?: string;
  /**
   * @remarks
   * Recipient list name
   * 
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @remarks
   * List status. Values:
   * 
   * - 0: Uploading
   * - 1: Upload completed
   * 
   * @example
   * 0
   */
  receiversStatus?: string;
  /**
   * @remarks
   * UTC formatted creation time
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      desc: 'Desc',
      receiverId: 'ReceiverId',
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      receiversStatus: 'ReceiversStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      createTime: 'string',
      desc: 'string',
      receiverId: 'string',
      receiversAlias: 'string',
      receiversName: 'string',
      receiversStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

