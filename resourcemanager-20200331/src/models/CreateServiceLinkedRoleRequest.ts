// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The suffix of the role name.
   * 
   * The role name (including its suffix) must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * For example, if the suffix is `Example`, the role name is `ServiceLinkedRoleName_Example`.
   * 
   * @example
   * Example
   */
  customSuffix?: string;
  /**
   * @remarks
   * The description of the service-linked role.
   * 
   * You must configure this parameter for service-linked roles that support custom suffixes. Otherwise, the preset value is used and cannot be modified.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.
   */
  description?: string;
  /**
   * @remarks
   * The service name.
   * 
   * For more information about the service name, see [Alibaba Cloud services that support service-linked roles](https://help.aliyun.com/document_detail/461722.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polardb.aliyuncs.com
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      customSuffix: 'CustomSuffix',
      description: 'Description',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSuffix: 'string',
      description: 'string',
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

