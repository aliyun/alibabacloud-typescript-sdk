// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BackupFileResponseBodyData } from "./BackupFileResponseBodyData";


export class BackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are backed up.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The object that is returned.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  data?: BackupFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-22ex666a5mco5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': BackupFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

