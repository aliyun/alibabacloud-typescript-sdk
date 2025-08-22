// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistryModuleRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  moduleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @example
   * alicloud
   */
  provider?: string;
  /**
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

