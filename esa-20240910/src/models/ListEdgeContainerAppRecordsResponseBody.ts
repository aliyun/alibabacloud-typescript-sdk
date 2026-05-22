// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppRecordsResponseBodyRecords extends $dara.Model {
  appId?: string;
  cname?: string;
  configId?: number;
  createTime?: string;
  recordId?: number;
  recordName?: string;
  schemdId?: number;
  siteId?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cname: 'Cname',
      configId: 'ConfigId',
      createTime: 'CreateTime',
      recordId: 'RecordId',
      recordName: 'RecordName',
      schemdId: 'SchemdId',
      siteId: 'SiteId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cname: 'string',
      configId: 'number',
      createTime: 'string',
      recordId: 'number',
      recordName: 'string',
      schemdId: 'number',
      siteId: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppRecordsResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: ListEdgeContainerAppRecordsResponseBodyRecords[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEdgeContainerAppRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

