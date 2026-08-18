// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDataQualityRulesToEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated quality check task.
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
  dataQualityRuleIds?: number[];
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * 
   * This parameter specifies the DataWorks workspace for this API call.
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
      dataQualityRuleIds: 'DataQualityRuleIds',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      dataQualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRuleIds)) {
      $dara.Model.validateArray(this.dataQualityRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

