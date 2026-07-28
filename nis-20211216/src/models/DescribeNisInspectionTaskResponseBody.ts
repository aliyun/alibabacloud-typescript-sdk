// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionTaskResponseBodyCheckResourceList extends $dara.Model {
  /**
   * @remarks
   * The inspection rule.
   * 
   * @example
   * CheckAll
   */
  checkScope?: string;
  /**
   * @remarks
   * The resource type.
   * 
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
  /**
   * @remarks
   * The configuration of the inspected resources.
   */
  checkResourceList?: DescribeNisInspectionTaskResponseBodyCheckResourceList[];
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-07-01 10:00:57
   */
  createTime?: string;
  /**
   * @remarks
   * The inspection interval. The unit is **day**.
   * 
   * @example
   * 1
   */
  inspectionInterval?: string;
  /**
   * @remarks
   * The name of the inspection task.
   * 
   * @example
   * Default
   */
  inspectionName?: string;
  /**
   * @remarks
   * The type of inspection plan for the task. Valid values: basic and customized.
   * 
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @remarks
   * The time when the inspection task was triggered.
   * 
   * @example
   * 2024-07-01 15:15:57
   */
  inspectionTriggerTime?: string;
  /**
   * @remarks
   * The ID of the latest report.
   * 
   * @example
   * nir-7c3dd178738a429abe6d
   */
  lastUpdateReportId?: string;
  /**
   * @remarks
   * The time when the task was last updated.
   * 
   * @example
   * 2024-07-01 10:00:59
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The running status of the task.
   * 
   * Creating
   * 
   * Active
   * 
   * Running
   * 
   * Inactive
   * 
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

