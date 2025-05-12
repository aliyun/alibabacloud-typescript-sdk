// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E30DA7CB-03D0-51EB-8F18-856B99987E18
   */
  requestId?: string;
  /**
   * @remarks
   * Linked Role of Lingjun Connection Instance (AliyunServiceRoleForEfloVcc)
   * 
   * @example
   * CloudConnectionOperationRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

