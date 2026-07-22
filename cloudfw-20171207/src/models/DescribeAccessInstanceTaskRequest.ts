// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The synchronization node ID. You must specify at least one of TaskId and AccessInstanceId. If neither is specified, the API returns a 400 error.
   * 
   * @example
   * pdi-3bc2f91695ee48bd9377
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The synchronization node type.
   * 
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The task ID. You must specify at least one of TaskId and AccessInstanceId. If neither is specified, the API returns a 400 error.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceType: 'AccessInstanceType',
      lang: 'Lang',
      regionNo: 'RegionNo',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceType: 'string',
      lang: 'string',
      regionNo: 'string',
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

