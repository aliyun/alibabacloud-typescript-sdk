// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigDomainSecurityProfileRequest extends $dara.Model {
  cluster?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      config: 'Config',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      config: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

