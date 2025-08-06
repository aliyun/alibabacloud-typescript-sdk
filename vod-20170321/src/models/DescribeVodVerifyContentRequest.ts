// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to verify the ownership. You can specify only one domain name in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

