// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the batch job.
   * 
   * @example
   * Description
   */
  batchJobDescription?: string;
  /**
   * @remarks
   * The name of the batch job.
   * 
   * This parameter is required.
   * 
   * @example
   * First job group
   */
  batchJobName?: string;
  /**
   * @remarks
   * The list of calling numbers.
   * 
   * @example
   * ["95187"]
   */
  callingNumber?: string[];
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
   * The URL to download the Excel file for the batch job.
   * 
   * >You can obtain this parameter from the Folder response parameter of the GetJobDataUploadParams operation.
   * 
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
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
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @remarks
   * The JSON string of the job execution strategy. This parameter is required.
   * 
   * @example
   * {"maxAttemptsPerDay":2,"name":"Strategy name","workingTime":[{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"13:00:00","endTime":"18:30:00"}],"minAttemptInterval":60}
   */
  strategyJson?: string;
  /**
   * @remarks
   * Specifies whether the job is submitted. Valid values:
   * - true: The job is saved as a draft.
   * - false: The job is submitted.
   * 
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

