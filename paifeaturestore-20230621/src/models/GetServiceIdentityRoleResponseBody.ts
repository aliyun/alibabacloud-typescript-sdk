// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * 关联策略。
   * 
   * @example
   * {
   * "Version": "1",
   * "Statement":[]
   * }
   */
  policy?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 6F629E92-F64D-502D-85AA-A9C54894CA3D
   */
  requestId?: string;
  /**
   * @remarks
   * 服务账户角色名称。
   * 
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

