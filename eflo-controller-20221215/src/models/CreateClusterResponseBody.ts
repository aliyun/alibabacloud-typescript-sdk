// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i116913051663373010974
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * i159809891662373011015
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
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

