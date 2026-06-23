// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskInstanceRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The CU consumption configured for the task to run. This parameter must be specified if a serverless resource group is used.
   * 
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @remarks
   * The identifier of the scheduling resource group configured for the task to run.
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
   * The ID of the data quality evaluation task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000011
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The execution parameters of the data quality evaluation in the JSON format. The following keys are available:
   * - triggerTime: the millisecond timestamp of the trigger time. This is the base time for the $[yyyymmdd] expression in the data range of data quality monitoring. This key is required.
   * 
   * This parameter is required.
   * 
   * @example
   * { "triggerTime": 1733284062000 }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace in which this API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group information. This parameter is required when you run a data quality evaluation on a non-MaxCompute data source.
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

