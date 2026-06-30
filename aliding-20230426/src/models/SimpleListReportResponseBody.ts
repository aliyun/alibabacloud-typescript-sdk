// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleListReportResponseBodyDataList extends $dara.Model {
  createTime?: number;
  creatorId?: string;
  creatorName?: string;
  deptName?: string;
  remark?: string;
  reportId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      deptName: 'DeptName',
      remark: 'Remark',
      reportId: 'ReportId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorId: 'string',
      creatorName: 'string',
      deptName: 'string',
      remark: 'string',
      reportId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleListReportResponseBody extends $dara.Model {
  dataList?: SimpleListReportResponseBodyDataList[];
  hasMore?: boolean;
  nextCursor?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'dataList',
      hasMore: 'hasMore',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': SimpleListReportResponseBodyDataList },
      hasMore: 'boolean',
      nextCursor: 'number',
      requestId: 'string',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

