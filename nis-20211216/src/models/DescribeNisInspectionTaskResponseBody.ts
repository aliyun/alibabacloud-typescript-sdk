// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionTaskResponseBodyCheckResourceList extends $dara.Model {
  /**
   * @example
   * CheckAll
   */
  checkScope?: string;
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      checkScope: 'CheckScope',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkScope: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionTaskResponseBody extends $dara.Model {
  checkResourceList?: DescribeNisInspectionTaskResponseBodyCheckResourceList[];
  /**
   * @example
   * 2024-07-01 10:00:57
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  inspectionInterval?: string;
  /**
   * @example
   * Default
   */
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 2024-07-01 15:15:57
   */
  inspectionTriggerTime?: string;
  /**
   * @example
   * nir-7c3dd178738a429abe6d
   */
  lastUpdateReportId?: string;
  /**
   * @example
   * 2024-07-01 10:00:59
   */
  lastUpdateTime?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkResourceList: 'CheckResourceList',
      createTime: 'CreateTime',
      inspectionInterval: 'InspectionInterval',
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      inspectionTriggerTime: 'InspectionTriggerTime',
      lastUpdateReportId: 'LastUpdateReportId',
      lastUpdateTime: 'LastUpdateTime',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResourceList: { 'type': 'array', 'itemType': DescribeNisInspectionTaskResponseBodyCheckResourceList },
      createTime: 'string',
      inspectionInterval: 'string',
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      inspectionTriggerTime: 'string',
      lastUpdateReportId: 'string',
      lastUpdateTime: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResourceList)) {
      $dara.Model.validateArray(this.checkResourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

