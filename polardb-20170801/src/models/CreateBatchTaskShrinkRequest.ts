// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The target application type of the batch task.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The archive parameters.
   * 
   * @example
   * [{"skillName":"github","version":"1.0.0"},{"skillName":"skill-vetter","version":"1.0.1"}]
   */
  param?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the region information of all clusters under the target account.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the model service.
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
      instanceIdsShrink: 'InstanceIds',
      param: 'Param',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      instanceIdsShrink: 'string',
      param: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

