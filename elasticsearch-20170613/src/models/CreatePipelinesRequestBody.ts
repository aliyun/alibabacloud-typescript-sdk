// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelinesRequestBody extends $dara.Model {
  /**
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
   * This parameter is required.
   * 
   * @example
   * input { } filter { } output { }
   */
  config?: string;
  /**
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pipeline-test
   */
  pipelineId?: string;
  /**
   * @example
   * 1024
   */
  queueCheckPointWrites?: number;
  /**
   * @example
   * 1024
   */
  queueMaxBytes?: number;
  /**
   * @example
   * MEMORY
   */
  queueType?: string;
  /**
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

