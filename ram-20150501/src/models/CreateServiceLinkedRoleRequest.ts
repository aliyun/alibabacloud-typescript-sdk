// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The suffix of the role name.
   * 
   * The total length of the role name (including the suffix) is 1 to 64 characters and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * Example: If the suffix is Example, the role name is ServiceLinkedRoleName_Example, and the maximum length cannot exceed 64 characters.
   * 
   * @example
   * Example
   */
  customSuffix?: string;
  /**
   * @remarks
   * The description of the service-linked role.
   * 
   * You can specify a role description only for service-linked roles that allow custom suffixes. Otherwise, the role description uses a preset value and cannot be modified.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.
   */
  description?: string;
  /**
   * @remarks
   * The cloud service name associated with the service-linked role.
   * 
   * For more information, see the **Cloud service identity** column in [Cloud services that support service-linked roles](https://help.aliyun.com/document_detail/461722.html).
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

