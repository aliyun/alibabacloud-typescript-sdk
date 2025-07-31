// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @example
   * 这是一段任务的描述信息
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /karel
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vvr-8.0.9-flink-1.17
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * karel_hover_3
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FLINK_SQL
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamBatchJobMappingCreateCommand?: CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      streamBatchJobMappingCreateCommand: 'StreamBatchJobMappingCreateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

