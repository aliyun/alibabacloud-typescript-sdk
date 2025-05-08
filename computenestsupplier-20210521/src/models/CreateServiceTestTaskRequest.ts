// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * nametest
   */
  taskName?: string;
  /**
   * @remarks
   * The Task Execution Region
   * 
   * @example
   * cn-beijing
   */
  taskRegionId?: string;
  /**
   * @remarks
   * The service test case ids.
   * 
   * This parameter is required.
   */
  testCaseIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskRegionId: 'TaskRegionId',
      testCaseIds: 'TestCaseIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskName: 'string',
      taskRegionId: 'string',
      testCaseIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.testCaseIds)) {
      $dara.Model.validateArray(this.testCaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

