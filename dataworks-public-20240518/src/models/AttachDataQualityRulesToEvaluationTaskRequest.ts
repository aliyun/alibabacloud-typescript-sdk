// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDataQualityRulesToEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring task that is associated with the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The IDs of the monitoring rules.
   * 
   * This parameter is required.
   */
  dataQualityRuleIds?: number[];
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
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

