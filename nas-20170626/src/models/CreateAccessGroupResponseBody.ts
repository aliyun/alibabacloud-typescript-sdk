// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189F4F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
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

