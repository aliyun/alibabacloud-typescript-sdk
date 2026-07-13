// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 60bb3ef15ace449082cf914ed3ea****
   */
  groupId?: string;
  /**
   * @remarks
   * The new name of the domain name group.
   * 
   * @example
   * NewName
   */
  groupName?: string;
  /**
   * @remarks
   * The unique ID of the request.
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

