// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubDomainResponseBody extends $dara.Model {
  /**
   * @example
   * F4208C83-B9BC-4A64-A739-8F88E98DA469
   */
  requestId?: string;
  /**
   * @example
   * cn-hangzhou-h-aliyun
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

