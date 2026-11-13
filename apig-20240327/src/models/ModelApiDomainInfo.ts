// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelApiDomainInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether it is the default domain name of the instance.
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-d00000000000000000000
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name scope.
   * 
   * @example
   * Dedicated
   */
  domainScope?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * api.example.com
   */
  name?: string;
  /**
   * @remarks
   * The access protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      domainId: 'domainId',
      domainScope: 'domainScope',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      domainId: 'string',
      domainScope: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

