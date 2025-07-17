// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskInstanceRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The task runs to configure CU consumption. If Serverless resource groups are used, you must specify this parameter.
   * 
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @remarks
   * The identifier of the scheduling resource group configured for running the task.
   * 
   * @example
   * 63900680
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityEvaluationTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * Data quality verification execution parameters in JSON format. The available keys are as follows:
   * - triggerTime: the millisecond timestamp of the trigger time. The baseline time of the $[yyyymmdd] expression in the data range of data quality monitoring. Required.
   * 
   * This parameter is required.
   * 
   * @example
   * { "triggerTime": 1733284062000 }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter is used to determine the DataWorks workspaces used for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Resource Group information, which must be filled in when running non-MaxCompute data quality verification.
   */
  runtimeResource?: CreateDataQualityEvaluationTaskInstanceRequestRuntimeResource;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      parameters: 'string',
      projectId: 'number',
      runtimeResource: CreateDataQualityEvaluationTaskInstanceRequestRuntimeResource,
    };
  }

  validate() {
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

