// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDcdnDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain names whose configurations you want to delete. Separate multiple accelerated domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The names of the features that you want to delete. Separate multiple feature names with commas (,). For more information about feature names, see [Feature settings for a domain name](https://help.aliyun.com/document_detail/410622.html).
   * 
   * This parameter is required.
   * 
   * @example
   * referer_white_list_set,https_force
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

