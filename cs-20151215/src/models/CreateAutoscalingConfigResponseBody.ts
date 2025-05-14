// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoscalingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc212d04dfe184547bffaa596********
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF8BE105-C32B-1269-9774-5510********
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5fd211e924e1d007********
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

