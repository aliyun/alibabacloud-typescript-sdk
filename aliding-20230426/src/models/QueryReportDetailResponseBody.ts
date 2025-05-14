// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReportDetailResponseBodyContent } from "./QueryReportDetailResponseBodyContent";


export class QueryReportDetailResponseBody extends $dara.Model {
  content?: QueryReportDetailResponseBodyContent[];
  /**
   * @example
   * 1691980997000
   */
  createTime?: number;
  /**
   * @example
   * 012345
   */
  creatorId?: string;
  creatorName?: string;
  deptName?: string;
  /**
   * @example
   * 1691980997000
   */
  modifiedTime?: number;
  remark?: string;
  /**
   * @example
   * 1231232134
   */
  reportId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  templateName?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      creatorId: 'creatorId',
      creatorName: 'creatorName',
      deptName: 'deptName',
      modifiedTime: 'modifiedTime',
      remark: 'remark',
      reportId: 'reportId',
      requestId: 'requestId',
      templateName: 'templateName',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': QueryReportDetailResponseBodyContent },
      createTime: 'number',
      creatorId: 'string',
      creatorName: 'string',
      deptName: 'string',
      modifiedTime: 'number',
      remark: 'string',
      reportId: 'string',
      requestId: 'string',
      templateName: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

