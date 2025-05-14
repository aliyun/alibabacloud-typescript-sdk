// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListReportResponseBodyDataListContents } from "./ListReportResponseBodyDataListContents";


export class ListReportResponseBodyDataList extends $dara.Model {
  contents?: ListReportResponseBodyDataListContents[];
  /**
   * @example
   * 1678416166000
   */
  createTime?: number;
  /**
   * @example
   * 1127123
   */
  creatorId?: string;
  /**
   * @example
   * admin
   */
  creatorName?: string;
  deptName?: string;
  images?: string[];
  /**
   * @example
   * 31.1264
   */
  latitude?: string;
  /**
   * @example
   * 108.938036
   */
  longitude?: string;
  /**
   * @example
   * 1653543540000
   */
  modifiedTime?: number;
  remark?: string;
  /**
   * @example
   * d64994d09916c76276dd9bfa23637644
   */
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

