// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * User don\\"t have permission to create SLR.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The role details.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleDetails?: string;
  /**
   * @remarks
   * The name of the service-linked role. Default value: AliyunServiceRoleForPaiLLMTrace.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleDetails: 'RoleDetails',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleDetails: 'string',
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

