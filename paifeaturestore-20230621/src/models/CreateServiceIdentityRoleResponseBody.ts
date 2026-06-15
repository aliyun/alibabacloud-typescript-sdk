// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ServiceLinkedRoleAlreadyExistsErrorProblem
   */
  code?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the service account role.
   * 
   * @example
   * AliyunServiceRoleForFeatureStore
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

