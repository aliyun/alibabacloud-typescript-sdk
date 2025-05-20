// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKillInstanceSessionTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  You must specify this parameter if your database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-8vbkfj5a756um****
   */
  nodeId?: string;
  /**
   * @remarks
   * The task ID. You can obtain the task ID from the response parameters of the [CreateKillInstanceSessionTask](https://help.aliyun.com/document_detail/609246.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * f77d535b45405bd462b21caa3ee8****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
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

