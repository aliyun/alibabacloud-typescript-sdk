// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDcdnIpaDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names accelerated by IPA. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The list of features. `[{"functionArgs":[{"argName":"parameter name","argValue":"parameter value"}],"functionName":"feature name"}]`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs":[{"argName":"domain_name","argValue":"api.*com"}],"functionName":"protogw"}]
   */
  functions?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

