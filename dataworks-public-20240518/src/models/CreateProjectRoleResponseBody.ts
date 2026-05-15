// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRoleResponseBody extends $dara.Model {
  /**
   * @example
   * base_role_dte
   */
  code?: string;
  /**
   * @example
   * B313938A-4475-599B-98EB-A0875019FD5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

