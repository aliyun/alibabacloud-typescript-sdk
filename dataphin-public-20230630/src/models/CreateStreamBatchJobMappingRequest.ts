// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a sample description for the task
   */
  description?: string;
  /**
   * @remarks
   * The directory where the task is generated.
   * 
   * This parameter is required.
   * 
   * @example
   * /karel
   */
  directory?: string;
  /**
   * @remarks
   * The database engine version of the Flink DPI engine.
   * 
   * This parameter is required.
   * 
   * @example
   * vvr-8.0.9-flink-1.17
   */
  engineVersion?: string;
  /**
   * @remarks
   * The environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * karel_hover_3
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * This parameter is required.
   * 
   * @example
   * FLINK_SQL
   */
  fileType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The VVP cluster type. This parameter is specific to VVP. Valid values: SESSION and PREJOB. If it is not applicable, leave it empty or do not specify it.
   * 
   * This parameter is required.
   * 
   * @example
   * PREJOB
   */
  vvpClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      directory: 'Directory',
      engineVersion: 'EngineVersion',
      env: 'Env',
      fileName: 'FileName',
      fileType: 'FileType',
      projectId: 'ProjectId',
      queueName: 'QueueName',
      vvpClusterType: 'VvpClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      directory: 'string',
      engineVersion: 'string',
      env: 'string',
      fileName: 'string',
      fileType: 'string',
      projectId: 'number',
      queueName: 'string',
      vvpClusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The stream-batch integrated task information.
   * 
   * This parameter is required.
   */
  streamBatchJobMappingCreateCommand?: CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      streamBatchJobMappingCreateCommand: 'StreamBatchJobMappingCreateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      streamBatchJobMappingCreateCommand: CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand,
    };
  }

  validate() {
    if(this.streamBatchJobMappingCreateCommand && typeof (this.streamBatchJobMappingCreateCommand as any).validate === 'function') {
      (this.streamBatchJobMappingCreateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

