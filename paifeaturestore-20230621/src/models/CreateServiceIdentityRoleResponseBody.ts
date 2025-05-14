// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @example
   * ServiceLinkedRoleAlreadyExistsErrorProblem
   */
  code?: string;
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
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

