// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for ApsaraVideo VOD. Only a single domain name can be queried at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The feature names. You can query multiple feature configurations in a single request. Separate multiple feature names with commas (,). For the features supported by accelerated domain names for ApsaraVideo VOD and their names, see [Feature functions for domain name configuration](https://help.aliyun.com/document_detail/2411639.html).
   * 
   * This parameter is required.
   * 
   * @example
   * filetype_based_ttl_set,set_req_host_header
   */
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

