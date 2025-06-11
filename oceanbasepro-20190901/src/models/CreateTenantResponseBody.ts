// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

