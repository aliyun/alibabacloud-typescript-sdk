// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDataQualityRulesFromEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring task that is associated with the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The IDs of the monitoring rules.
   * 
   * This parameter is required.
   */
  dataQualityRuleIdsShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
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

