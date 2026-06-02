// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchJobsRequest extends $dara.Model {
  batchJobDescription?: string;
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
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
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
      batchJobDescription: 'BatchJobDescription',
      batchJobName: 'BatchJobName',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
      submitted: 'Submitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobDescription: 'string',
      batchJobName: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobFilePath: 'string',
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

