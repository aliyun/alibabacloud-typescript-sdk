// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainStagingConfigRequest extends $dara.Model {
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
   * The list of feature names. Separate multiple values with commas (,). For more information, see [A list of features](https://help.aliyun.com/document_detail/388460.html).
   * 
   * @example
   * aliauth
   */
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

