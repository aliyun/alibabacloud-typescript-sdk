// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueEngineVersionByEnvRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  env?: string;
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
   * BOTH
   */
  streamBatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      env: 'Env',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      queueName: 'QueueName',
      streamBatchMode: 'StreamBatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      env: 'string',
      opTenantId: 'number',
      projectId: 'number',
      queueName: 'string',
      streamBatchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

