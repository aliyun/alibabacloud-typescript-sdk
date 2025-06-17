// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopCdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the accelerated domain names. You can specify one or more domain names in each request. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
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

