// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the target domain name group.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the destination domain name group.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
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

