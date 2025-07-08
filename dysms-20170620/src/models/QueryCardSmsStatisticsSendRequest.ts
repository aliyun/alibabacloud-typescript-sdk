// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsSendRequest extends $dara.Model {
  customTmpCode?: string;
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
  sendDateEnd?: string;
  sendDateStart?: string;
  signName?: string;
  tmpCode?: string;
  static names(): { [key: string]: string } {
    return {
      customTmpCode: 'CustomTmpCode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sendDateEnd: 'SendDateEnd',
      sendDateStart: 'SendDateStart',
      signName: 'SignName',
      tmpCode: 'TmpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTmpCode: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sendDateEnd: 'string',
      sendDateStart: 'string',
      signName: 'string',
      tmpCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

