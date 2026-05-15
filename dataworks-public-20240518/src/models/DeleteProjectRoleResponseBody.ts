// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 5BCD2252-F184-55A8-9675-337C43BE0CD1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

