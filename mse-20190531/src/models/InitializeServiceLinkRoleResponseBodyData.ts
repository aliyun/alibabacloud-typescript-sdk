// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeServiceLinkRoleResponseBodyData extends $dara.Model {
  /**
   * @example
   * ram:CreateServiceLinkedRole
   */
  requiredPermission?: string;
  /**
   * @example
   * AliyunServiceRoleForMSE
   */
  roleName?: string;
  /**
   * @example
   * mse.aliyuncs.com
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      requiredPermission: 'RequiredPermission',
      roleName: 'RoleName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredPermission: 'string',
      roleName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

