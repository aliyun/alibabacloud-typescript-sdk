// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the O\\&M task. IDs are separated by commas (,).
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * E9ADB6BE-1598-57FC-B86D-D7F4C69B****
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

