// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceTaskRequest extends $dara.Model {
  /**
   * @example
   * pdi-3bc2f91695ee48bd9377
   */
  accessInstanceId?: string;
  /**
   * @example
   * AckClusterConnector
   */
  accessInstanceType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
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

