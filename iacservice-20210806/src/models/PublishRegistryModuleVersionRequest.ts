// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRegistryModuleVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-bucket
   */
  moduleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * terraform-alicloud-modules
   */
  namespaceName?: string;
  /**
   * @remarks
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

