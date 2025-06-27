// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTasksResponseBodyInspectionTaskList extends $dara.Model {
  /**
   * @example
   * 2024-06-18 00:14:46
   */
  createTime?: string;
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svm******hzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * nir-b4c4c9******8a25e
   */
  lastUpdateReportId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      lastUpdateReportId: 'LastUpdateReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      lastUpdateReportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

