// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBatchJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  batchJobName?: string;
  /**
   * @example
   * ["95187"]
   */
  callingNumber?: string[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  jobGroupId?: string;
  /**
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @example
   * 7d820242-f4f0-4d2e-ae35-b424c41cbc5b
   */
  scriptId?: string;
  strategyJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  submitted?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchJobName: 'BatchJobName',
      callingNumber: 'CallingNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
      jobGroupId: 'JobGroupId',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
      submitted: 'Submitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobName: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      instanceId: 'string',
      jobFilePath: 'string',
      jobGroupId: 'string',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
      submitted: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

