// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted or non-existent group.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B95BE680-5A6A-1CAD-8AB1-09DFF5D6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

