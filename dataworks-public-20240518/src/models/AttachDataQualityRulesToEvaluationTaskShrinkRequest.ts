// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDataQualityRulesToEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The list of data quality rule IDs.
   * 
   * This parameter is required.
   */
  dataQualityRuleIdsShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Settings page to obtain the workspace ID.
   * This parameter specifies the DataWorks workspace in which the API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      dataQualityRuleIdsShrink: 'DataQualityRuleIds',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      dataQualityRuleIdsShrink: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

