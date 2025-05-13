// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was created.
   * 
   * @example
   * 50
   */
  batchDelay?: number;
  /**
   * @example
   * 125
   */
  batchSize?: number;
  /**
   * @remarks
   * The description of the pipeline.
   * 
   * @example
   * input {  }  filter {  }  output {  }
   */
  config?: string;
  /**
   * @remarks
   * The state of the MPS queue. Valid values:
   * 
   * *   NOT_DEPLOYED: The node is not deployed.
   * *   RUNNING
   * *   DELETED: Deleted. The console does not display this status.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The total capacity of the queue in bytes. Unit: MB.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * Number of queue checkpoint writes.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @example
   * RUNNING
   */
  pipelineStatus?: string;
  /**
   * @remarks
   * Pipeline batch delay. Unit: milliseconds.
   * 
   * @example
   * 1024
   */
  queueCheckPointWrites?: number;
  /**
   * @remarks
   * The number of pipeline workers.
   * 
   * @example
   * 1024
   */
  queueMaxBytes?: number;
  /**
   * @remarks
   * The specific configuration of the pipeline.
   * 
   * @example
   * MEMORY
   */
  queueType?: string;
  /**
   * @remarks
   * The size of the pipeline batch.
   * 
   * @example
   * 2
   */
  workers?: number;
  static names(): { [key: string]: string } {
    return {
      batchDelay: 'batchDelay',
      batchSize: 'batchSize',
      config: 'config',
      description: 'description',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      pipelineId: 'pipelineId',
      pipelineStatus: 'pipelineStatus',
      queueCheckPointWrites: 'queueCheckPointWrites',
      queueMaxBytes: 'queueMaxBytes',
      queueType: 'queueType',
      workers: 'workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchDelay: 'number',
      batchSize: 'number',
      config: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      pipelineId: 'string',
      pipelineStatus: 'string',
      queueCheckPointWrites: 'number',
      queueMaxBytes: 'number',
      queueType: 'string',
      workers: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

