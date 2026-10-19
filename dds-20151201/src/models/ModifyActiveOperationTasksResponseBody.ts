// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O&M tasks. Separate multiple IDs with commas (,).
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CAAE9DDA-65FD-584C-A378-F1F24676****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

