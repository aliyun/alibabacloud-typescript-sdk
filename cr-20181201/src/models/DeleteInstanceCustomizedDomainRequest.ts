// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceCustomizedDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * crtest.wgine-inc.com
   */
  domain?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-av3kxfkkiwofikl5
   */
  instanceId?: string;
  /**
   * @remarks
   * The custom module name.
   * 
   * This parameter is required.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

