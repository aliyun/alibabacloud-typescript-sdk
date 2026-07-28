// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRegistryModuleVersionRequest extends $dara.Model {
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
   * The template name.
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
   * The version number. The value must conform to the [semantic version](http://semver.org/) specification, such as 1.0.1. The initial version is 1.0.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

