// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O\\&M events. Separate multiple event IDs with commas (,).
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
   * E278D833-BB4B-50BF-8646-7BC1BAB2373B
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

