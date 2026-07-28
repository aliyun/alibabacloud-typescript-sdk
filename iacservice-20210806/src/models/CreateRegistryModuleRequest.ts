// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistryModuleRequest extends $dara.Model {
  /**
   * @remarks
   * The access permission. Valid values:
   * 
   * - private: private.
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
   * The description of the Registry template.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The name of the Registry template. The name must meet the following requirements:
   * 
   * - The name must be 3 to 63 characters in length.
   * - The name can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_), and cannot start or end with a hyphen.
   * - The name must be unique within the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * ModuleName
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * This parameter is required.
   * 
   * @example
   * NamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The provider type. Valid values:
   * 
   * - alicloud: Alibaba Cloud.
   * 
   * @example
   * alicloud
   */
  provider?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - self: custom template.
   * 
   * @example
   * self
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      clientToken: 'clientToken',
      description: 'description',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      provider: 'provider',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      clientToken: 'string',
      description: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      provider: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

