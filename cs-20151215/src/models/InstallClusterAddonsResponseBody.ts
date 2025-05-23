// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * 任务ID。
   * 
   * @example
   * T-5a54309c80282e39ea0****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

