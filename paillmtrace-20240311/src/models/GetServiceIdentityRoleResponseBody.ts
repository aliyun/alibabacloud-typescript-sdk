// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * EntityNotExist
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * Serivce role does not exit.
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
  roleDetail?: string;
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
      roleDetail: 'RoleDetail',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleDetail: 'string',
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

