// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheTaskRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

