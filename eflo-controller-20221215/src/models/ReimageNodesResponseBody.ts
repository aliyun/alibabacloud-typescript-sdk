// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReimageNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FBCD9B-C93F-54E8-A168-AADE7E66DAD2
   */
  requestId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * i158782151663841517926
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

