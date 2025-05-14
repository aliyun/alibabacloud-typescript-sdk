// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleListReportResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1567034772000
   */
  createTime?: number;
  /**
   * @example
   * 1701038
   */
  creatorId?: string;
  /**
   * @example
   * xinmu
   */
  creatorName?: string;
  deptName?: string;
  /**
   * @example
   * ops
   */
  remark?: string;
  /**
   * @example
   * d64994d09916c76276dd9bfa23637644
   */
  reportId?: string;
  /**
   * @example
   * WG-Template
   */
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

