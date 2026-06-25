// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A519F77D-28A0-52F5-AB82-5********8
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

