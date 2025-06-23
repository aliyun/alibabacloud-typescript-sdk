// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCnameReusesRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names of the websites. You can specify the domain names of up to 200 websites.
   * 
   * >  A forwarding rule must be configured for a domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domains?: string[];
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

