// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

