// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteLiveDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com,example.aliyundoc.com,example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The names of the features. Separate multiple features with commas (,). For more information, see **Features specified by the Functions parameter**.
   * 
   * This parameter is required.
   * 
   * @example
   * referer_white_list_set,ip_black_list_set
   */
  functionNames?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functionNames: 'string',
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

