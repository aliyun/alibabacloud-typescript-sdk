// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to be verified. Only a single domain name is supported.
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

