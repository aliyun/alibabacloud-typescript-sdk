// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVodDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The information about the addresses of origin servers.
   * 
   * @example
   * [{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]
   */
  sources?: string;
  /**
   * @remarks
   * The top-level domain.
   * 
   * @example
   * example.com
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

