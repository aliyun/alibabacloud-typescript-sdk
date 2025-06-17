// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. For more information about ConfigId, see [Usage notes on ConfigId](https://help.aliyun.com/document_detail/388994.html).
   * 
   * @example
   * 6295
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The names of the features. Separate multiple feature names with commas (,). For more information, see [Parameters for configuring features for domain names](https://help.aliyun.com/document_detail/388460.html).
   * 
   * @example
   * aliauth
   */
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      functionNames: 'string',
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

