// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelinesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The pipeline batch delay. Unit: milliseconds. Default value: 50.
   * 
   * @example
   * 50
   */
  batchDelay?: number;
  /**
   * @remarks
   * The pipeline batch size. Default value: 125.
   * 
   * @example
   * 125
   */
  batchSize?: number;
  /**
   * @remarks
   * The specific configuration of the pipeline.
   * 
   * This parameter is required.
   * 
   * @example
   * input { } filter { } output { }
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
   * The pipeline ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pipeline-test
   */
  pipelineId?: string;
  /**
   * @remarks
   * The number of queue checkpoint writes. Default value: 1024.
   * 
   * @example
   * 1024
   */
  queueCheckPointWrites?: number;
  /**
   * @remarks
   * The total capacity of the queue in bytes. Unit: MB. Default value: 1024.
   * 
   * @example
   * 1024
   */
  queueMaxBytes?: number;
  /**
   * @remarks
   * The queue type. Valid values:
   * - MEMORY: A traditional memory-based queue.
   * - PERSISTED: A disk-based ACKed queue (persistent queue).
   * 
   * @example
   * MEMORY
   */
  queueType?: string;
  /**
   * @remarks
   * The number of pipeline worker threads. Default value: the number of CPU cores of the instance.
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
      pipelineId: 'pipelineId',
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
      pipelineId: 'string',
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

export class CreatePipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The request body parameters that specify pipeline information. For more information, see [logstash.yml](https://www.elastic.co/guide/en/logstash/6.7/logstash-settings-file.html).
   */
  body?: CreatePipelinesRequestBody[];
  /**
   * @remarks
   * Specifies whether to save and deploy the pipeline. Valid values:
   * 
   * - true: Save and deploy.
   * - false (default): Save only.
   * 
   * @example
   * false
   */
  trigger?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: { 'type': 'array', 'itemType': CreatePipelinesRequestBody },
      trigger: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

