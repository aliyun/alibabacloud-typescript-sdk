// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the job status. Valid values: -**true**: The job can be run only if the job is enabled. -**false**: The job can be run even if the job is disabled.
   * 
   * @example
   * true
   */
  checkJobStatus?: boolean;
  /**
   * @remarks
   * The type of the designated machine. Valid values: -**1**: worker. -**2**: label.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The parameters that are passed to trigger the job to run. The input value can be a random string. The parameters that are passed are obtained by calling the `context.getInstanceParameters()` class in the `processor` code. The parameters are different from custom parameters for creating jobs.
   * 
   * @example
   * test
   */
  instanceParameters?: string;
  /**
   * @remarks
   * The job ID. You can obtain the job ID on the Task Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The label of the worker.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The worker address of the application. To query the worker address, call the GetWokerList operation.
   * 
   * @example
   * xxxxxxx@127.0.0.1:222
   */
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      checkJobStatus: 'CheckJobStatus',
      designateType: 'DesignateType',
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      jobId: 'JobId',
      label: 'Label',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobStatus: 'boolean',
      designateType: 'number',
      groupId: 'string',
      instanceParameters: 'string',
      jobId: 'number',
      label: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      worker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

