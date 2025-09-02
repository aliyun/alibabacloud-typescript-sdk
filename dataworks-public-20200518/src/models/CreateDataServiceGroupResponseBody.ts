// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business process ID.
   * 
   * @example
   * ds_12345
   */
  groupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EF****
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

