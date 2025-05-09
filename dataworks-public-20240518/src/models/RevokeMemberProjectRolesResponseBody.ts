// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeMemberProjectRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
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

