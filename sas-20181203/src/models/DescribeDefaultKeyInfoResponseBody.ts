// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultKeyInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain names.
   */
  domainList?: string[];
  /**
   * @remarks
   * The company names.
   * 
   * @example
   * ****技术股份有限公司
   */
  names?: string;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      names: 'Names',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': 'string' },
      names: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

