// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTaskRequest extends $dara.Model {
  applicationType?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * [{"skillName":"github","version":"1.0.0"},{"skillName":"skill-vetter","version":"1.0.1"}]
   */
  param?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the regions of all clusters in your account.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the batch task.
   * 
   * This parameter is required.
   * 
   * @example
   * batch_task_test
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * This parameter is required.
   * 
   * @example
   * polarclaw_install_skills
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      instanceIds: 'InstanceIds',
      param: 'Param',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      param: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

