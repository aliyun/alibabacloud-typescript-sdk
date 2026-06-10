// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBatchJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * 催收作业组
   */
  batchJobName?: string;
  /**
   * @remarks
   * The calling numbers.
   * 
   * @example
   * ["95187"]
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * 这是催收作业组-01
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * The download URL of the Excel file for the job.
   * 
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 7d820242-f4f0-4d2e-ae35-b424c41cbc5b
   */
  scriptId?: string;
  /**
   * @remarks
   * The policy in the JSON format.
   * 
   * @example
   * {"maxAttemptsPerDay":2,"name":"策略名字","workingTime":[{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"13:00:00","endTime":"18:30:00"}],"minAttemptInterval":60}
   */
  strategyJson?: string;
  /**
   * @remarks
   * Specifies whether to submit the job. \\`false\\` submits the job. \\`true\\` saves the job as a draft.
   * 
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

