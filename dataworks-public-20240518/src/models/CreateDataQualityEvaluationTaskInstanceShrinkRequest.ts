// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality check task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000011
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The execution parameters of the data quality check in JSON format. The following keys are available:
   * - triggerTime: the timestamp in milliseconds of the trigger time. This value is used as the base time for the $[yyyymmdd] expression in the data range of the data quality monitoring task. This key is required.
   * 
   * This parameter is required.
   * 
   * @example
   * { "triggerTime": 1733284062000 }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can logon to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Storage Management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace for this API invoke operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group information. This parameter is required when running data quality checks on non-MaxCompute data.
   */
  runtimeResourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      parameters: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

