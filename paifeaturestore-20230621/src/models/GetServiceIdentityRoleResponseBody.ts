// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @example
   * {
   * "Version": "1",
   * "Statement":[]
   * }
   */
  policy?: string;
  /**
   * @example
   * 6F629E92-F64D-502D-85AA-A9C54894CA3D
   */
  requestId?: string;
  /**
   * @example
   * AliyunServiceRoleForPaiFeatureStore
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
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

