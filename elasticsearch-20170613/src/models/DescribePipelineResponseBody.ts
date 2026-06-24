// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The batch delay of the pipeline. Unit: milliseconds.
   * 
   * @example
   * 50
   */
  batchDelay?: number;
  /**
   * @remarks
   * The batch size of the pipeline.
   * 
   * @example
   * 125
   */
  batchSize?: number;
  /**
   * @remarks
   * The specific configuration of the pipeline.
   * 
   * @example
   * input {  }  filter {  }  output {  }
   */
  config?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * The time when the pipeline was created.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the pipeline was last updated.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @remarks
   * The pipeline status. Valid values:
   * 
   * - NOT_DEPLOYED: not deployed.
   * - RUNNING: running.
   * - DELETED: deleted. This status is not displayed in the console.
   * 
   * @example
   * RUNNING
   */
  pipelineStatus?: string;
  /**
   * @remarks
   * The number of queue checkpoint writes.
   * 
   * @example
   * 1024
   */
  queueCheckPointWrites?: number;
  /**
   * @remarks
   * The total capacity of the queue, in bytes. Unit: MB.
   * 
   * @example
   * 1024
   */
  queueMaxBytes?: number;
  /**
   * @remarks
   * The queue type. Valid values:
   * 
   * - MEMORY: a traditional memory-based queue.
   * - PERSISTED: a disk-based ACKed queue (persistent queue).
   * 
   * @example
   * MEMORY
   */
  queueType?: string;
  /**
   * @remarks
   * The number of pipeline worker threads.
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

export class DescribePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD1***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned pipeline information. For more information, see [logstash.yml](https://www.elastic.co/guide/en/logstash/6.7/logstash-settings-file.html).
   */
  result?: DescribePipelineResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribePipelineResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

