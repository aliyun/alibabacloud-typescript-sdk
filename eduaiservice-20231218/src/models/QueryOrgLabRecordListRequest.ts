// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgLabRecordListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  labId?: string;
  orderBy?: string;
  orderDirection?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      labId: 'LabId',
      orderBy: 'OrderBy',
      orderDirection: 'OrderDirection',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      labId: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

