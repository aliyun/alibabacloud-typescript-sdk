// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistryNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The access permission. Valid values:
   * 
   * - private: private access.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The administrator name.
   * 
   * @example
   * admin
   */
  maintainer?: string;
  /**
   * @remarks
   * The workspace name. The name must meet the following requirements:
   * 
   * - The name must be 3 to 63 characters in length.
   * - The name can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_), and cannot start or end with a hyphen.
   * - The name must be unique within the global workspace resources.
   * 
   * This parameter is required.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      clientToken: 'clientToken',
      description: 'description',
      maintainer: 'maintainer',
      namespaceName: 'namespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      clientToken: 'string',
      description: 'string',
      maintainer: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

