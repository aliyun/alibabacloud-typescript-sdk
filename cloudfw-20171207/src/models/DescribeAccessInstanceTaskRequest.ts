// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization node.
   * 
   * @example
   * pdi-3bc2f91695ee48bd9377
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The type of the synchronization node.
   * 
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @remarks
   * The language of the response messages.
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
   * The task ID.
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

