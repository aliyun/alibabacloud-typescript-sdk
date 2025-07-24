// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class QueryOrgLabRecordListResponseBodyData extends $dara.Model {
  createdAt?: number;
  labRecordId?: string;
  status?: number;
  submittedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      labRecordId: 'LabRecordId',
      status: 'Status',
      submittedAt: 'SubmittedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      labRecordId: 'string',
      status: 'number',
      submittedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgLabRecordListResponseBody extends $dara.Model {
  data?: QueryOrgLabRecordListResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryOrgLabRecordListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

