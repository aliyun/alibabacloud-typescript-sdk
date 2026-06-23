// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDataQualityRulesFromEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
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
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Settings page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
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

