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

