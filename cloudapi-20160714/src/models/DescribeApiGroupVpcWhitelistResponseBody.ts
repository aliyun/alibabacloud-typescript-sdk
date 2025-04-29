// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiGroupVpcWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp11w979o2s9rcr962w25
   */
  vpcIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

