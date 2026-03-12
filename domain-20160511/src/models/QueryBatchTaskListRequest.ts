// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBatchTaskListRequest extends $dara.Model {
  beginCreateTime?: string;
  endCreateTime?: string;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'string',
      endCreateTime: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

