// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportResponseBodyDataListContents extends $dara.Model {
  key?: string;
  sort?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      sort: 'Sort',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      sort: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportResponseBodyDataList extends $dara.Model {
  contents?: ListReportResponseBodyDataListContents[];
  createTime?: number;
  creatorId?: string;
  creatorName?: string;
  deptName?: string;
  images?: string[];
  latitude?: string;
  longitude?: string;
  modifiedTime?: number;
  remark?: string;
  reportId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      deptName: 'DeptName',
      images: 'Images',
      latitude: 'Latitude',
      longitude: 'Longitude',
      modifiedTime: 'ModifiedTime',
      remark: 'Remark',
      reportId: 'ReportId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': ListReportResponseBodyDataListContents },
      createTime: 'number',
      creatorId: 'string',
      creatorName: 'string',
      deptName: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      latitude: 'string',
      longitude: 'string',
      modifiedTime: 'number',
      remark: 'string',
      reportId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportResponseBody extends $dara.Model {
  dataList?: ListReportResponseBodyDataList[];
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
      dataList: { 'type': 'array', 'itemType': ListReportResponseBodyDataList },
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

